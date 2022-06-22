import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: "Insert Gtag code" },
    },
    app.router
  );
};
