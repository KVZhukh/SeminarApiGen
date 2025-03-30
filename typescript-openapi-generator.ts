module.exports = {
    cache: [
        {
            input: 'https://api-stage-1.ecom.auchan.ru/api-docs/v2/index.yaml',
            output: './src/apiGen/v2',
        },
    ],
    orval: {
        output: {
            headers: true,
            docs: true,
            clean: true,
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
            mode: 'tags-split',
            client: 'axios-functions',
            prettier: true,
            tslint: true,
        },
    },
};
