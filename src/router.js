import Vue from "vue";
import Router from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
Vue.use(Router);
Vue.use(ElementUI, { size: "small" });

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./app.vue"),
      children: [
        {
          path: "/",
          component: () => import("./components/"),
          children: []
        }
      ]
    }
  ]
});
