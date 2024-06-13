// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/IndexPage.vue') }
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue')
//   }
// ]

// export default routes

import { createRouter, createWebHistory } from "vue-router";
import GetStartedRoutes from "src/Modules/GetStarted/Routes/Index.js";
// import AuthRoutes from "src/Modules/Authentication/Routes";

const routes = [];

// routes.push(AuthRoutes);
routes.push(GetStartedRoutes);

routes.push({
  path: "/:catchAll(.*)*",
  component: () => import("pages/ErrorNotFound.vue"),
});

export default routes;
