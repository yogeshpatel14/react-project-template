export {};
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "setupTests.ts",
    "index.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".(ts|tsx)": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
};
