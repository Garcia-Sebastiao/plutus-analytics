import { Route, Routes } from "react-router";
import { SignIn } from "./pages/auth/sign-in";

export function App() {
  return (
    <Routes>
      <Route path="/" index element={<SignIn />} />
    </Routes>
  );
}
