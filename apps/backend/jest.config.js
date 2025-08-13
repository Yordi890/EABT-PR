module.exports = {
    rootDir: "./",

    testMatch: ['**/*.spec.ts'],

    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },

    collectCoverageFrom: [
        "!**/node_modules/**",
        "!**/test/**",
        "!**/generated/**",
        "!**/dist/**",
        "!**/coverage/**",
        "!**/dto/**",
        "!jest.config.js",
        "!**/src/main.ts"
    ],

    coverageDirectory: "coverage",

    testEnvironment: "node",

    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
}