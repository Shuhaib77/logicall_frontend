import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const QueryClients = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh
      cacheTime: 10 * 60 * 1000, // 10 minutes in cache
      // refetchOnWindowFocus: false, // don’t refetch when window is focused
      // refetchOnMount: false, // don’t refetch if cached
      // refetchOnReconnect: false, // don’t refetch on network reconnect
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={QueryClients}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </BrowserRouter>
);
