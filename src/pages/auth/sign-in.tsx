import { useAuthStore } from "@/store/auth.store";
import { SignInForm } from "./compenents/sign-in-form";
import { SignUpForm } from "./compenents/sign-up-form";

export function SignIn() {
  const { step } = useAuthStore();

  return (
    <div className="w-full flex h-screen p-8">
      <div className="flex-1 h-full flex relative items-center justify-center flex-col">
        <img
          src="/logo.png"
          className="w-32 absolute top-0 left-0"
          alt="Plutus"
        />

        {step == "sign-in" ? <SignInForm /> : <SignUpForm />}
      </div>

      <div className="flex-1 max-w-2xl">
        <div className="w-full h-full overflow-hidden bg-primary/10 rounded-3xl">
          <video
            src={
              step == "sign-up"
                ? "https://www.pexels.com/pt-br/download/video/7534401/"
                : "https://www.pexels.com/pt-br/download/video/7204518/"
            }
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
