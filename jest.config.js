module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    },
    globals: {
        'ts-jest': {
            packageJson: 'package.json'
        }
    }
};
