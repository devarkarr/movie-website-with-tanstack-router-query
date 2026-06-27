/** @format */

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider, { useAuth } from "./providers/auth-provider";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{
        auth,
      }}
    />
  );
};

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
