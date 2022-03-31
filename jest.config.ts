export default {
  roots: ["<rootDir>/test"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!**/test/**",
    "!**/config/**",
  ],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: false,
  testMatch: ["**/*.spec.ts"],
  coverageProvider: "v8",
};
