import { signInWithPopup } from "firebase/auth";
import { userService } from "@/services/user.service";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "@/lib/firebase";
import { useAuthStore } from "@/store/auth.store";
import type { UserProps } from "@/types/user.types";

export function useSignIn() {
  const navigate = useNavigate();
  const { setStep, setTempUser } = useAuthStore();

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userData = {
        id: user.uid,
        name: user.displayName || "",
        email: user.email || "",
        avatar: user.photoURL || "",
      };

      if (await userService.getUser(userData?.id)) {
        navigate("/dashboard");
        return;
      }

      setTempUser?.(userData as unknown as UserProps);
      setStep("sign-up");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return { handleGoogleSignIn };
}
