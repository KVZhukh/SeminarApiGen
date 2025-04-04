module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'next',
        'airbnb',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:react-server-components/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            typescript: true,
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
            },
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-undef': 0,
        'react/no-danger': 0,
        'import/no-cycle': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['css'],
            },
        ],
        camelcase: 0,
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-unresolved': [
            2,
            {
                ignore: ['@'],
            },
        ],
        'no-unused-vars': 0,
        '@typescript-eslint/consistent-type-imports': [1, { fixStyle: 'inline-type-imports' }],
        '@typescript-eslint/no-unused-vars': [2],
        'react/no-unescaped-entities': 1,
        'import/extensions': 0,
        'react/destructuring-assignment': 0,
        'react/require-default-props': 0,
        'import/no-extraneous-dependencies': 1,
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/button-has-type': 1,
        'react/prop-types': 0,
        'no-nested-ternary': 2,
        'react/no-array-index-key': 1,
        'jsx-a11y/anchor-is-valid': 0,
        'no-console': [
            2,
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
        'consistent-return': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': [1],
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-static-element-interactions': [
            2,
            {
                handlers: ['onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
            },
        ],
        'jsx-a11y/click-events-have-key-events': 0,
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
        'react-server-components/use-client': 'error',
    },
};
