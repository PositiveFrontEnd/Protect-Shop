import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default mergeConfig(
  defineConfig({
    // Vite plugins
    plugins: [
      react(), // Vite plugin for React
      svgr(),
    ],
    // Vitest configuration
    test: {
      css: false, // Disable CSS processing in tests
      globals: true, // Include global variables in tests // TypeError: global.beforeEach is not a function
      fakeTimers: true, // Use fake timers in tests
      exclude: ["**/node_modules/**", "automation"], // Exclude specific paths from tests
      environment: "happy-dom", // Set the testing environment
      moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      },
      transform: {
        "^.+\\.(ts|js|jsx)$": "babel-jest",
      },
      transformIgnorePatterns: [
        "/node_modules/(?!swiper|swiper/react|ssr-window|dom7)",
      ],
      setupFiles: ["setupTests.js"], // Specify setup files for tests
      silent: true, // Run tests silently
      coverage: {
        // Code coverage settings
        reporter: ["text", "json", "html"], // Specify coverage reporters
        lines: 80, // Minimum percentage of lines covered
        functions: 80, // Minimum percentage of functions covered
        branches: 80, // Minimum percentage of branches covered
        statements: 80, // Minimum percentage of statements covered
        exclude: [], // Exclude specific paths from coverage
      },
    },
    // Vite configuration
    resolve: {
      // Vite alias configuration for path resolution
      alias: [
        {
          find: "src",
          replacement: resolve(__dirname, "./src"),
        },
      ],
    },
  })
);
