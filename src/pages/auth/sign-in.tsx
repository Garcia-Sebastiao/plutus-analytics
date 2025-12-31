export function SignIn() {
  return (
    <div className="w-full flex h-screen p-8">
      <div className="flex-1 h-full flex relative items-center justify-center flex-col">
        <img
          src="/logo.png"
          className="w-32 absolute top-0 left-0"
          alt="Plutus"
        />

        <div className="flex flex-col items-start gap-y-6 w-full max-w-2xl">
          <div className="flex flex-col gap-y-4">
            <h4 className="text-3xl font-semibold text-black/90">
              Iniciar Sessão
            </h4>

            <p className="text-lg text-gray-600">
              Embarque agora para a nova era de resgate económico as startups
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-2xl">
        <div className="w-full h-full overflow-hidden bg-primary/10 rounded-2xl">
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
