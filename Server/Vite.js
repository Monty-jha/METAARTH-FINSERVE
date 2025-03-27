import express from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
import viteConfig from "../vite.config.js"; // Make sure this is .js if you're fully using JS
import { nanoid } from "nanoid";

// Recreate __filename and __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a logger instance using Vite’s built-in logger
const viteLogger = createLogger();

// Custom log function for consistent log output
export function log(message, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Sets up Vite in middleware mode for development
export async function setupVite(app, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1); // Kill the process on critical errors
      },
    },
    server: serverOptions,
    appType: "custom", // We're integrating Vite manually
  });

  // Use Vite’s middleware for dev server
  app.use(vite.middlewares);

  // Wildcard route to serve index.html through Vite (with HMR)
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        __dirname,
        "..",
        "client",
        "index.html"
      );

      // Always reload template from disk in dev mode
      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // Bust cache by appending a nanoid query string
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

// Serves static assets and index.html in production
export function serveStatic(app) {
  const distPath = path.resolve(__dirname, "public");

  // Check if the production build exists
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Serve static files like JS, CSS, images, etc.
  app.use(express.static(distPath));

  // Fallback: Always serve index.html for unmatched routes
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
