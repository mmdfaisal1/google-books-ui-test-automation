import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./test-artifacts",
  timeout: 45000,
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
    baseURL: "https://books.google.com",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    ignoreHTTPSErrors: true,
  },
});
