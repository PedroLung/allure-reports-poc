module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-allure2-reporter",
      {
        resultsDir: "allure-results",
      },
    ],
  ],
};
