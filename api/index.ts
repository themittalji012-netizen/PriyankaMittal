import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vercel will look for your frontend in the 'dist' folder at the root
const staticPath = path.resolve(__dirname, "..", "dist");

app.use(express.static(staticPath));

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Priyanka Mittal API!" });
});

// Serve the frontend for all other routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// IMPORTANT: Do not use app.listen(). Export default instead.
export default app;