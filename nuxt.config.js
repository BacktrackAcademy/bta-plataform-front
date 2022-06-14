export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 3002, // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bta_platform_front",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  axios: {
    baseURL: "https://backtrackacademy.com/",
    // baseURL: "http://localhost:3000/",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ["auth"],
  },

  // env: {
  //   githubClientId: process.env.GITHUB_CLIENT_ID,
  //   githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  //   // facebookId: process.env.FACEBOOK_CLIENT_ID,
  //   // discordClientId: process.env.DISCORD_CLIENT_ID,
  //   // discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
  //   // googleClientId: process.env.GOOGLE_CLIENT_ID,
  // },


  auth: {
    strategies: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
      local: {
        scheme: "local",
        endpoints: {
          login:  { url: 'api/v1/users/sign_in' },
          logout: { url: 'api/v1/users/sign_out', method: 'delete' },
          user:   { url: 'api/v1/users/current' }
          // login: {
          //   url: "api/v1/users/sign_in",
          //   method: "post",
          //   headers: { 'Content-Type': 'application/json' },
          // },
          // logout: {
          //   url: "api/v1/users/sign_out",
          //   method: "delete",
          // },
          // user: {
          //   url: "api/v1/users/current",
          // },
        },
        // token: {
        //   property: "authorization_token",
        //   type: "Bearer",
        //   name: "Authorization",
        // },
        // user: {
        //   property: false,
        //   autoFetch: false,
        // },
      },
    },
    token: {
      prefix: "_token.",
      global: true,
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/cursos",
    },
  },

};
