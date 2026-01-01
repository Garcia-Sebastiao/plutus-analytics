import { signInWithPopup } from "firebase/auth";
import { userService } from "@/services/user.service";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "@/lib/firebase";
import type { UserProps } from "@/types/user.types";

export function useSignIn() {
  const navigate = useNavigate();

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userData: UserProps = {
        id: user.uid,
        name: user.displayName || "Usuário",
        email: user.email || "",
        avatar: user.photoURL || "",
      };

      await userService.syncUser(userData);

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return { handleGoogleSignIn };
}
