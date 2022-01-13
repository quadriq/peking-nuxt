import colors from 'vuetify/es5/util/colors'

export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Winter Games 2022 - Beijing - Mobile App',
        title: 'Winter Games 2022 - Beijing - Mobile App',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'App to follow Winter Olympics 2022 in Bejing / Peking, China' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/scss/style.scss"],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/analytics.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-analytics'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    robots: {
        UserAgent: '*',
        Allow: '/'
    },

    sitemap: {
        hostname: 'https://games2022.app',
        gzip: true,
        exclude: []
    },

    googleAnalytics: {
        id: 'UA-104889859-3'
    }
}