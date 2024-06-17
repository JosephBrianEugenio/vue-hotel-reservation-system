import { boot } from "quasar/wrappers";
import { useAuthStore } from "src/Modules/Authentication/Stores/Auth.js";
const AuthRecordStore = useAuthStore();
export default boot(({ router }) => {
  // Global navigation guard
  router.beforeEach((to, from, next) => {
    // Check if the route requires authentication
    if (to.meta.requiresAuth && !AuthRecordStore.isAuthenticated) {
      // Redirect to the login page or any other handling for unauthenticated users
      next("/");
    } else {
      next();
    }
  });

  // Route-specific guard
  router.beforeEach((to, from, next) => {
    // Access the meta property of the route
    const meta = to.meta;

    // You can do something with the meta property here
    // console.log("Route meta:", meta);

    next();
  });
});
