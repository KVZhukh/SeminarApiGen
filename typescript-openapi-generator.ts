module.exports = {
    cache: [],
    orval: {
        output: {
            override: {
                mutator: {
                    path: './src/settings/gen/mutator/custom-instance.ts',
                    name: 'customInstance',
                },
                fetch: {
                    includeHttpResponseReturnType: false,
                },
                header: () => ['The file is automatically generated, do not touch it manually'],
            },
            client: 'axios-functions',
            prettier: true,
            tslint: true,
        },
    },
};
