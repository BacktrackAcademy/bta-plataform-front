export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  generate: {
    cache: false,
  },
  server: {
    port: 3002, // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Cursos online de Hacking ético - Backtrack Academy",
    htmlAttrs: {
      lang: "es",
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
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  sitemap: {
    hostname: "https://app.backtrackacademy.com",
    gzip: true,
  },
  robots: {
    UserAgent: "*",
    Disallow: "/",
    Sitemap: "https://app.backtrackacademy.com/sitemap.xml",
  },
  axios: {
    // baseURL: "https://backtrackacademy.com/",
    baseURL: "http://localhost:3000/",
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
  //   pruebaVar: process.env.NUXT_ENV_PRUEBAVAR
  // //   // discordClientId: process.env.NUXT_ENV_DISCORD_CLIENT_ID,
  // //   // discordClientSecret: process.env.NUXT_ENV_DISCORD_CLIENT_SECRET,
  // //   // googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
  // },
  auth: {
    strategies: {
      github: {
        clientId: "6115787fa03c2eb81b10",
        clientSecret: "3b5efe47238e637b760bc3563370dfc8b530f7e9",
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          // token: 'http://localhost:3000/auth/github-nuxt/callback', // somm backend url to resolve your auth with google and give you the token back
          userInfo: 'http://localhost:3000/api/users/auth/github/' // the endpoint to get the user info after you recived the token 
        },
      },
      // facebook: {
      //   clientId: process.env.FACEBOOK_CLIENT_ID,
      //   responseType: 'code',
      //   endpoints: {
      //     token: process.env.BACKEND_URL + '/auth/social/facebook/',
      //     userInfo: process.env.API_URL + '/user/',
      //   },
      //   token: {
      //     // By default the token type is Bearer, but simple_jwt is configured
      //     // to accept only JWT tokens.
      //     type: 'JWT',
      //   },
      // },
      facebook: {
        clientId: process.env.NUXT_ENV_FACEBOOK_CLIENT_ID, 
        responseType: "code",
        endpoints: {
          // token: "https://backtrackacademy.com/auth/facebook/callback",
          // userInfo:
          //   "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}",
        },
        redirectUri: "https://backtrackacademy.com/auth/facebook", // redirect_uri https://backtrackacademy.com/api/v1/social_auth/callback
        scope: ["public_profile", "email"],
        token: {
          // By default the token type is Bearer, but simple_jwt is configured
          // to accept only JWT tokens.
          type: "JWT",
        },
      },
      google: {
        clientId: "16651669541-lj5hic9dtlpg7t6r2eh760e2n26sh8ru.apps.googleusercontent.com",
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          authorization: 'https://github.com/login/oauth/authorize',
          token: 'http://localhost:3000/auth/google-nuxt/callback', // somm backend url to resolve your auth with google and give you the token back
          userInfo: 'http://localhost:3000/auth/google-nuxt/callback/' // the endpoint to get the user info after you recived the token 
        },
      },
      local: {
        scheme: "local",
        endpoints: {
          login: { url: "api/v1/users/sign_in" },
          logout: { url: "api/v1/users/sign_out", method: "delete" },
          user: { url: "api/v1/users/current" },
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
      gh2: {
        scheme: "local",
        endpoints: {
          login: { url: "https://backtrackacademy.com/api/users/auth/github",method: "get" },
          // logout: { url: "api/v1/users/sign_out", method: "delete" },
          // user: { url: "api/v1/users/current" },
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
