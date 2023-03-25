/* eslint-disable no-undef */
const config = {
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['html', 'text', 'text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  moduleFileExtension: ['js'],
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^App(.*)$': '<rootDir>/app$1',
    '^Assets(.*)$': '<rootDir>/app/assets$1',
    '^Components(.*)$': '<rootDir>/app/components$1',
    '^Store(.*)$': '<rootDir>/app/store$1',
    '^Services(.*)$': '<rootDir>/app/services$1',
    '^Views(.*)$': '<rootDir>/app/views$1',
    '^Routes(.*)$': '<rootDir>/app/routes$1',
  },
};

module.exports = config;
