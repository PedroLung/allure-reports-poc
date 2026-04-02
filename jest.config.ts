import os from "node:os";

export default {
  preset: "ts-jest",
  testEnvironment: "allure-jest/node",
  testEnvironmentOptions: {
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      node_version: process.version,
    },
  },
};
