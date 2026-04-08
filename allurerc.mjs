import { defineConfig } from "allure";

export default defineConfig({
  output: "allure-report",
  historyPath: "./history.jsonl",
  appendHistory: true,
});

// push
