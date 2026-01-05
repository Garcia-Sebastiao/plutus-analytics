import type { UserProps } from "@/types/user.types";
import { create } from "zustand";
type StepProps = "sign-in" | "sign-up";

type AuthStoreProps = {
  step: StepProps;
  tempUser?: UserProps;
  setTempUser?: (user: UserProps | undefined) => void;
  setStep: (step: StepProps) => void;
};

export const useAuthStore = create<AuthStoreProps>((set) => ({
  step: "sign-in",
  setTempUser: (user) =>
    set({
      tempUser: user,
    }),
  setStep: (step) =>
    set({
      step,
    }),
}));
