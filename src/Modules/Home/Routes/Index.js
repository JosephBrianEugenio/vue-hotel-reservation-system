const route = {
  path: "/",
  component: () => import("src/Modules/Home/Layouts/Index.vue"),
  redirect: { name: "home.view" },
  children: [
    {
      path: "home",
      name: "home.view",
      component: () => import("src/Modules/Home/Index.vue"),
    },
  ],
};

export default route;
