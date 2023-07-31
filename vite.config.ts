import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 9090,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@app": "/src/app",
      "@interface": "/src/interface",
      "@pages": "/src/pages",
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
