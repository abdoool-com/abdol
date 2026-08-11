
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Use the custom SSR wrapper.
    server: {
      entry: "server",
    },
  },

  vite: {
    // GitHub Pages serves the repository under /abdol/.
    // Locally, BASE_URL is not set, so the app runs from /.
    base: process.env['BASE_URL'] ?? "/",
  },
});

