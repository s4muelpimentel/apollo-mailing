export default {
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
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
