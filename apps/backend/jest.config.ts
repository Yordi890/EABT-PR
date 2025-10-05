import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'],
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/test/**',
    '!**/generated/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/dto/**',
    '!jest.config.ts',
    '!**/src/main.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
};

export default config;
