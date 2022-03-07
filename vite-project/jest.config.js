module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
}
