import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { loader: "custom", loaderFile: "./lib/imageLoader.ts" },
  turbopack: { root },
  outputFileTracingRoot: root,
};
export default nextConfig;
