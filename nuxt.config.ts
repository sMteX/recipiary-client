import { Configuration } from '@nuxt/types';
const config = require('config');

const client: { host: string; port: number } = config.get('client');
const server: { protocol: string; host: string; port: number } = config.get('server');

const nuxtConfig: Configuration = {
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module', 'nuxt-composition-api'],
    typescript: {
        typeCheck: true,
        ignoreNotFoundWarnings: true
    },
    mode: 'universal',
    env: {
        serverUrl: `${server.protocol}://${server.host}:${server.port}`
    },
    /*
     ** Host and port config
     */
    server: {
        port: client.port,
        host: client.host
    },
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s | Recipiary',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'ant-design-vue/dist/antd.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/global.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/antd-ui', '@/plugins/clipboard', '@/plugins/fontawesome'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxt/content', '@nuxtjs/style-resources', '@nuxtjs/axios'],
    axios: {},
    content: {

    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
    },
    /*
     ** Style resources
     */
    styleResources: {
        scss: './assets/css/variables.scss'
    },
    /*
     ** Router configuration
     */
    router: {}
};

export default nuxtConfig;
