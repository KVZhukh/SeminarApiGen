module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    endOfLine: 'lf',
    importOrder: [
        '^react$',
        '<THIRD_PARTY_MODULES>',
        '^@lib/(.*)$',
        '^@api/(.*)$',
        '^@customTypes/(.*)$',
        '^@context/(.*)$',
        '^@views/(.*)$',
        '^@containers/(.*)$',
        '^@controls/(.*)$',
        '^@components/(.*)$',
        '^@scripts/hooks/(.*)$',
        '^@scripts/helpers/(.*)$',
        '^@scripts/gds/(.*)$',
        '^@scripts/(.*)$',
        '^@styles/(.*)$',
        '^@images/(.*)$',
        '^@icons/(.*)$',
        '^[./]',
        '^[../]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
};
