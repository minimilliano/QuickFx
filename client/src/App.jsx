import { createRoot } from "react-dom/client";
import { Link, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Link to="/">QuickFx</Link>
        <NavBar />
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
