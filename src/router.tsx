import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Use Vite's base URL so the router works on GitHub Pages (/abdol/)
    // and locally (/) without code changes.
    basepath: import.meta.env.BASE_URL ?? "/",
  });

  return router;
};

