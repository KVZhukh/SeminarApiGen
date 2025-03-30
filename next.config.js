const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/**
 * Next конфигурация
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/src/styles/')],
        prependData: `@import "src/styles/global.scss";`,
    },
    images: {
        domains: ['https://front-stage-17.ecom.auchan.ru'],
    },

    publicRuntimeConfig: {
        environment: process.env.ENVIRONMENT,
    },

    async headers() {
        /** this string is required according to Ensi license */
        return [{ source: '/(.*)', headers: [{ key: 'X-Ensi-Platform', value: '1' }] }];
    },

    /** https://stackoverflow.com/a/75855548 */
    // experimental: {
    //     scrollRestoration: true,
    //     // https://github.com/vercel/turbo/issues/4832
    //     turbo: {
    //         rules: {
    //             '*.svg': {
    //                 loaders: ['@svgr/webpack'],
    //                 as: '*.js',
    //             },
    //         },
    //     },
    // },

    swcMinify: true,
    trailingSlash: true,
    reactStrictMode: false,
};

module.exports = withPlugins(
    [
        withSvgr({
            svgrOptions: {
                svgo: false,
                titleProp: true,
            },
        }),
        withBundleAnalyzer,
    ],
    nextConfig
);
