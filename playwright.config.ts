import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./ui-tests-artifacts",
  timeout: 30000,
  expect: {
    timeout: 15000,
  },

  reporter: [
    ["list"],
    [
      "html",
      {
        open: "on-failure",
        outputFolder: "./reports/html-report",
      },
    ],
    [
      "json",
      {
        outputFile: "./reports/json-report/test-results.json",
      },
    ],
  ],
  use: {
    trace: "on-first-retry",
  },
});
