/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
    },
    experimental: {
        fontLoaders: [
            {
                loader: '@next/font/google',
                options: { subsets: ['latin', 'cyrillic'] },
            },
        ],
    },
}
