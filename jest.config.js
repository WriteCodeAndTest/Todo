module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist', 'cypress'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'client/src/**/*.tsx',
    '!**/node_modules/**',
    '!client/src/stories/**',
    '!client/src/index.tsx',
    '!client/src/App.tsx',
    '!client/src/components/Layout/*',
    '!client/src/components/AppRouter/*',
    '!client/src/router/*',
    '!client/src/utils/index.tsx',
  ],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/FileTransformer.js',
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/client/src$1',
    '^@components(.*)$': '<rootDir>/client/src/components$1',
    '^@shared(.*)$': '<rootDir>/client/src/components/shared$1',
    '^@search(.*)$': '<rootDir>/client/src/components/Search/components$1',
    '^@utils(.*)$': '<rootDir>/client/src/utils$1',
    '^@assets(.*)$': '<rootDir>/client/src/assets$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -12,
    },
  },
};
