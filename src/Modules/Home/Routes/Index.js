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
    {
      path: "hotel/:uid",
      name: "hotel.detail",
      component: () => import("src/Modules/Home/HotelDetails.vue"),
    },
  ],
};

export default route;
