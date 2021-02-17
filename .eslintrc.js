module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    env: {
        node: true
    },
    rules: {
        'typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    }
};
