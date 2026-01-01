import { Route, Routes } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { queryClient } from "./config/client.config";
import { QueryClientProvider } from "@tanstack/react-query";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" index element={<SignIn />} />
      </Routes>
    </QueryClientProvider>
  );
}
