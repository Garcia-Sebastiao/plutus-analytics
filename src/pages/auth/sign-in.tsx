import { GoogleIcon } from "@/assets/google-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignIn() {
  return (
    <div className="w-full flex h-screen p-8">
      <div className="flex-1 h-full flex relative items-center justify-center flex-col">
        <img
          src="/logo.png"
          className="w-32 absolute top-0 left-0"
          alt="Plutus"
        />

        <div className="flex flex-col items-start gap-y-6 w-full max-w-xl">
          <div className="flex flex-col gap-y-4">
            <h4 className="text-3xl font-semibold text-black/90">
              Iniciar Sessão
            </h4>

            <p className="text-lg text-gray-600">
              Embarque agora para a nova era de resgate económico as startups
            </p>
          </div>

          <form action="" className="w-full flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="font-medium">
                Email <span className="text-red-500 font-semibold">*</span>
              </label>

              <Input
                disabled
                readOnly
                className="h-13 text-base! rounded-lg placeholder:text-base shadow-none"
                placeholder="Digite o seu email"
              />
            </div>

            <Button
              disabled
              className="w-full h-13 hover:brightness-90 cursor-pointer text-base font-medium rounded-lg"
            >
              Continuar
            </Button>
          </form>

          <div className="flex items-center gap-x-6 w-full">
            <div className="flex-1 h-px bg-border" />
            <span className="dark:text-white/60 text-black/50">Ou</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <Button
            className="w-full dark:text-white/60! h-13 gap-x-4 hover:brightness-90 cursor-pointer text-base bg-gray-200 text-gray-900 font-medium rounded-lg"
          >
            <div className="flex-none scale-125">
              <GoogleIcon />
            </div>
            Continuar com o Google
          </Button>

          <span className="self-center text-base">
            Desenvolvido por{" "}
            <a
              target="_blank"
              className="underline text-primary"
              href="https://www.linkedin.com/in/garcia-sebastiao"
            >
              Garcia Sebastião
            </a>
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl">
        <div className="w-full h-full overflow-hidden bg-primary/10 rounded-3xl">
          <video
            src="https://www.pexels.com/pt-br/download/video/7204518/"
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
