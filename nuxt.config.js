module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css",
        integrity: "sha256-itWEYdFWzZPBG78bJOOiQIn06QCgN/F0wMDcC4nOhxY=",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
