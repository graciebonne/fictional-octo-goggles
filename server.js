// const http = require("http");
// const https = require("https");
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const { Transform } = require("stream");

// const PORT = 3000;
// const ROOT = __dirname;
// const PROD_ORIGIN = "https://opensea.io";

// const app = express();

// /* -------------------- 🛠️ HASH MAPPING LOGIC -------------------- */
// const hashMap = {}; // Maps "originalName" -> "localPath"

// function buildHashMap(dir) {
//     if (!fs.existsSync(dir)) return;
//     const files = fs.readdirSync(dir, { recursive: true });
//     files.forEach(file => {
//         if (file.endsWith(".js") || file.endsWith(".css")) {
//             // Extract the base name without the hash if possible, 
//             // or map specific patterns like 'abc123.js'
//             const fileName = path.basename(file);
//             const nameParts = fileName.split("-");
//             if (nameParts.length > 1) {
//                 const prefix = nameParts[0]; // e.g., 'page' or 'layout'
//                 hashMap[prefix] = fileName;
//             }
//             // Also map full string for direct replacements
//             hashMap[fileName.split('.')[0]] = fileName;
//         }
//     });
//     console.log(`📦 Hash Map built with ${Object.keys(hashMap).length} local assets.`);
// }

// buildHashMap(path.join(ROOT, "_next/static"));

// /* -------------------- 💉 RSC INTERCEPTOR & REWRITER -------------------- */
// function rewriteRscStream(res) {
//     return new Transform({
//         transform(chunk, encoding, callback) {
//             let content = chunk.toString();
            
//             // Regex to find Next.js chunk patterns in RSC strings
//             // This looks for hex-like hashes typically found in RSC
//             Object.keys(hashMap).forEach(key => {
//                 // This is a simplified replacer; you might need to adjust 
//                 // the regex depending on how OpenSea specifically formats strings
//                 const localFile = hashMap[key];
//                 const localHash = localFile.split('.')[0];
                
//                 // Replace potential new hashes with our local hash
//                 // Matches 16-20 character hex strings common in Webpack/Next
//                 content = content.replace(/[a-f0-9]{16,20}/g, (match) => {
//                     // If we see a hash that isn't ours, we could log it or try to find a pattern
//                     // For now, we inject our local known hashes where logic dictates
//                     return match; 
//                 });
                
//                 // Direct filename swap (the most effective for hydration)
//                 // If the payload says "NewHash.js" and we have "OldHash.js"
//                 // This logic needs to be tailored to the specific mismatch seen in your console
//             });

//             callback(null, content);
//         }
//     });
// }

// // Helper to pipe requests to production
// function proxyToProd(req, res, targetUrl) {
//     const options = {
//         hostname: new URL(PROD_ORIGIN).hostname,
//         port: 443,
//         path: targetUrl,
//         method: req.method,
//         headers: {
//             ...req.headers,
//             host: new URL(PROD_ORIGIN).host,
//             "accept-encoding": "identity" // CRITICAL: Must be identity to read/rewrite text
//         },
//     };

//     const connector = https.request(options, (remoteRes) => {
//         // Remove content-length because we are modifying the body
//         const headers = { ...remoteRes.headers };
//         delete headers['content-length'];

//         res.writeHead(remoteRes.statusCode, headers);
        
//         // Pass through our rewriter before sending to browser
//         remoteRes.pipe(rewriteRscStream(res)).pipe(res);
//     });

//     connector.on("error", (e) => {
//         console.error(`❌ Proxy Error: ${e.message}`);
//         res.status(502).end();
//     });

//     req.pipe(connector);
// }

// /* -------------------- 1️⃣ RSC PROXY -------------------- */
// app.use((req, res, next) => {
//     const isRsc = req.url.includes("_rsc") || (req.headers.accept || "").includes("text/x-component");
//     if (isRsc) {
//         return proxyToProd(req, res, req.url);
//     }
//     next();
// });

// /* -------------------- 2️⃣ ASSET MIRROR -------------------- */
// app.use(async (req, res, next) => {
//     const ext = path.extname(req.path);
//     if (!ext || ext === ".html") return next();

//     const localPath = path.join(ROOT, req.path);
//     if (fs.existsSync(localPath)) return res.sendFile(localPath);

//     // If file is missing, we download it to stop the 404s
//     try {
//         const response = await fetch(PROD_ORIGIN + req.url);
//         if (response.ok) {
//             const buffer = Buffer.from(await response.arrayBuffer());
//             fs.mkdirSync(path.dirname(localPath), { recursive: true });
//             fs.writeFileSync(localPath, buffer);
//             res.setHeader("Content-Type", response.headers.get("content-type"));
//             return res.end(buffer);
//         }
//     } catch (err) { console.error(`❌ Fetch Failed: ${req.path}`); }
//     next();
// });

// app.use(express.static(ROOT));
// app.get(/.*/, (req, res) => res.sendFile(path.join(ROOT, "index.html")));

// app.listen(PORT, () => console.log(`🟢 RSC Fixer running on http://localhost:${PORT}`));
/**
 * OpenSea TurboPack + RSC Stable Proxy
 * -----------------------------------
 * - Pins TurboPack permanently
 * - Rewrites RSC payloads
 * - Learns chunks once, then freezes
 * - Logs RSC payload diffs
 */
//require('dotenv').config(); // Load .env file
const https = require("https");
const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { Transform } = require("stream");

const PORT = 3000;
const ROOT = __dirname;
const PROD_ORIGIN = "https://opensea.io";

const NEXT_ROOT = "/_next/";
const STATIC_CHUNKS_DIR = path.join(ROOT, "_next/static/chunks");
const LOG_DIR = path.join(ROOT, "logs");

/** 🔒 PIN THIS TURBOPACK FOREVER */
const PINNED_TURBOPACK = "turbopack-46c9af7e8dd10e3f.js";

const app = express();

/* -------------------------------------------------------
   🧠 STATE
------------------------------------------------------- */

const chunkIndex = new Map(); // filename -> absolute path
const seenRscPayloads = new Set();

fs.mkdirSync(LOG_DIR, { recursive: true });

/* -------------------------------------------------------
   📦 BUILD INITIAL CHUNK INDEX
------------------------------------------------------- */

function buildChunkIndex() {
  if (!fs.existsSync(STATIC_CHUNKS_DIR)) return;

  const files = fs.readdirSync(STATIC_CHUNKS_DIR, { recursive: true });
  for (const f of files) {
    if (!f.endsWith(".js") && !f.endsWith(".css")) continue;
    chunkIndex.set(path.basename(f), path.join(STATIC_CHUNKS_DIR, f));
  }

  console.log(`📦 Chunk universe initialized (${chunkIndex.size} files)`);
}

buildChunkIndex();

/* -------------------------------------------------------
   🧪 RSC PAYLOAD DIFF LOGGER
------------------------------------------------------- */

function logRscPayload(payload) {
  const hash = crypto.createHash("sha256").update(payload).digest("hex");
  if (seenRscPayloads.has(hash)) return;

  seenRscPayloads.add(hash);
  const file = path.join(LOG_DIR, `rsc-${Date.now()}.txt`);
  fs.writeFileSync(file, payload);
  console.log(`🧬 New RSC payload logged → ${path.basename(file)}`);
}

/* -------------------------------------------------------
   💉 REWRITE STREAM (RSC + JS)
------------------------------------------------------- */

function rewriteStream({ isRsc }) {
  let buffer = "";

  return new Transform({
    transform(chunk, enc, cb) {
      buffer += chunk.toString("utf8");
      cb();
    },

    flush(cb) {
      let content = buffer;

      // 🔒 1. FORCE TURBOPACK PIN
      content = content.replace(
        /turbopack-[a-f0-9]{16,}\.js/g,
        PINNED_TURBOPACK
      );

      // 🔒 2. REMOVE DEPLOYMENT IDS
      //content = content.replace(/\?dpl=[a-zA-Z0-9_-]+/g, "");

      // 🔁 3. NORMALIZE CHUNK PATHS
      // content = content.replace(
      //   /static\/chunks\/([a-f0-9]{8,}\.(js|css))/g,
      //   (_, file) => `static/chunks/${file}`
      // );

      // 🧪 4. LOG RSC DIFFS
      if (isRsc) logRscPayload(content);

      this.push(content);
      cb();
    }
  });
}

/* -------------------------------------------------------
   🌐 PROXY TO PROD (WITH REWRITE)
------------------------------------------------------- */

function proxyToProd(req, res, { isRsc = false } = {}) {
  const options = {
    hostname: new URL(PROD_ORIGIN).hostname,
    port: 443,
    method: req.method,
    path: req.url,
    headers: {
      ...req.headers,
      host: new URL(PROD_ORIGIN).host,
      "accept-encoding": "identity",
    },
  };

  const proxy = https.request(options, (remoteRes) => {
    const headers = { ...remoteRes.headers };
    delete headers["content-length"];
    res.writeHead(remoteRes.statusCode, headers);

    remoteRes
      .pipe(rewriteStream({ isRsc }))
      .pipe(res);
  });

  proxy.on("error", (e) => {
    console.error("❌ Proxy error:", e.message);
    res.status(502).end();
  });

  req.pipe(proxy);
}

/* -------------------------------------------------------
   🔒 TURBOPACK FIREWALL
------------------------------------------------------- */

app.use((req, res, next) => {
  if (req.url.includes("turbopack-") && !req.url.endsWith(PINNED_TURBOPACK)) {
    console.log(`🔒 Redirected new TurboPack → pinned version`);
    return res.redirect(`${NEXT_ROOT}static/chunks/${PINNED_TURBOPACK}`);
  }
  next();
});

/* -------------------------------------------------------
   1️⃣ RSC INTERCEPTOR
------------------------------------------------------- */

app.use((req, res, next) => {
  const isRsc =
    req.url.includes("_rsc") ||
    (req.headers.accept || "").includes("text/x-component");

  if (isRsc) {
    console.log(`🧠 RSC request: ${req.url}`);
    return proxyToProd(req, res, { isRsc: true });
  }
  next();
});

/* -------------------------------------------------------
   2️⃣ CHUNK HANDLER (LEARN ONCE, THEN FREEZE)
------------------------------------------------------- */

app.use(async (req, res, next) => {
  if (!req.path.startsWith("/_next/static/chunks/")) return next();

  const file = path.basename(req.path);
  const localPath = path.join(ROOT, req.path);

  // ✅ Known chunk
  if (chunkIndex.has(file)) {
    return res.sendFile(chunkIndex.get(file));
  }

  // 🆕 First-time-seen chunk → learn & lock
  console.log(`🆕 Learning chunk: ${file}`);

  try {
    const r = await fetch(PROD_ORIGIN + req.url);
    if (!r.ok) throw new Error("fetch failed");

    const buf = Buffer.from(await r.arrayBuffer());
    fs.mkdirSync(path.dirname(localPath), { recursive: true });
    fs.writeFileSync(localPath, buf);

    chunkIndex.set(file, localPath);
    console.log(`🔒 Chunk locked: ${file}`);

    res.setHeader("content-type", r.headers.get("content-type"));
    return res.end(buf);
  } catch (e) {
    console.error(`❌ Failed to fetch chunk: ${file}`);
    return res.status(404).end();
  }
});

/* -------------------------------------------------------
   3️⃣ FALLBACK STATIC / PROD FETCH
------------------------------------------------------- */

app.use(async (req, res, next) => {
  const ext = path.extname(req.path);
  if (!ext) return next();

  const local = path.join(ROOT, req.path);
  if (fs.existsSync(local)) return res.sendFile(local);

  try {
    const r = await fetch(PROD_ORIGIN + req.url);
    if (r.ok) {
      const buf = Buffer.from(await r.arrayBuffer());
      fs.mkdirSync(path.dirname(local), { recursive: true });
      fs.writeFileSync(local, buf);
      res.setHeader("content-type", r.headers.get("content-type"));
      return res.end(buf);
    }
  } catch (_) {}

  next();
});

/* -------------------------------------------------------
   🏁 DEFAULT
------------------------------------------------------- */

app.use(express.static(ROOT));
app.get(/.*/, (_, res) =>
  res.sendFile(path.join(ROOT, "index.html"))
);

app.listen(PORT, () => {
  console.log(`🟢 Stable TurboPack Proxy running`);
  console.log(`👉 http://localhost:${PORT}`);
});
