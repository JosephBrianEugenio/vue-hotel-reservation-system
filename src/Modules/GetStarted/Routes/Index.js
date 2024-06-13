const route = {
  path: "/",
  component: () => import("src/Modules/Authentication/Layout/Index.vue"),
  redirect: { name: "client.view" },
  children: [
    {
      path: "",
      name: "client.view",
      component: () => import("src/Modules/GetStarted/Index.vue"),
    },
  ],
};

export default route;
