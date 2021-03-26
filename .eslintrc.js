module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': 'eslint-import-resolver-typescript',
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules for react hooks
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:import/errors', // Import recommended errors
        'plugin:import/warnings', // Import recommended warnings
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        'import/first': 'error',
        'import/exports-last': 'error',
        'import/no-unused-modules': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
        'import/named': 'error',
        'import/no-cycle': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-extraneous-dependencies': 'warn',
        'import/no-mutable-exports': 'error',
        'import/no-duplicates': 'error',
        'import/newline-after-import': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
        '@typescript-eslint/no-unused-vars': 'warn',

        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
};
