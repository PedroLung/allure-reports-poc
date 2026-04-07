import * as os from "node:os";

export default {
  preset: "ts-jest",
  testEnvironment: "allure-jest/node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  testEnvironmentOptions: {
    resultsDir: "allure-results",
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      node_version: process.version,
    },
  },
};
