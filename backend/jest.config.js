module.exports = {
    rootDir: "./",

    testMatch: ['**/*.spec.ts'],

    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },

    collectCoverageFrom: [
        "!**/node_modules/**", // Excluir la carpeta node_modules
        "!**/test/**", // Excluir la carpeta test
        "!**/generated/**", // Excluir la carpeta generated
        "!**/dist/**", // Excluir la carpeta dist
        "!**/coverage/**", // Excluir la carpeta dist
        "!**/dto/**", // Excluir todas las carpetas dto en cualquier módulo
        "!jest.config.js" // Excluir el archivo jest.config.js
    ],

    coverageDirectory: "coverage",

    testEnvironment: "node",

    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
}