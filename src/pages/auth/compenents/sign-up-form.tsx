import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSignUp } from "../hooks/use-sign-up";
import { Controller } from "react-hook-form";
import { MoneyInput } from "@/components/shared/inputs/currency-input";
import { BaseInput } from "@/components/shared/inputs/base-input";

export function SignUpForm() {
  const { onSubmit, loading, errors, setStep, register, control } = useSignUp();

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col gap-y-6 w-full max-w-xl"
    >
      <div className="flex flex-col gap-y-2">
        <h4 className="text-3xl font-semibold text-black/90 font-display">
          Quase lá!
        </h4>
        <p className="text-gray-600 text-lg">
          Conte-nos um pouco sobre a sua startup para o{" "}
          <span className="font-semibold text-primary">Plutus</span>.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        <BaseInput
          label="Nome da Empresa"
          placeholder="Ex: Atlas Tech"
          error={errors.companyName?.message}
          {...register("companyName")}
        />

        <BaseInput
          label="Setor de Atuação"
          placeholder="Ex: SaaS, Fintech, E-commerce"
          error={errors.industry?.message}
          {...register("industry")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <BaseInput
            label="Nº de Colaboradores"
            type="number"
            placeholder="Ex: 10"
            error={errors.employees?.message}
            {...register("employees")}
          />

          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, value, name, ref } }) => (
              <MoneyInput
                label="Saldo Atual (€)"
                placeholder="Ex: 50.000,00"
                name={name}
                value={value}
                ref={ref}
                onValueChange={(val) => {
                  const numericValue = val
                    ? parseFloat(val.replace(",", "."))
                    : 0;
                  onChange(numericValue);
                }}
                error={errors.amount?.message}
              />
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-13 mt-4 text-base! font-medium transition-all active:scale-95"
        >
          {loading ? "A preparar o seu altar..." : "Finalizar Configuração"}
        </Button>

        <button
          type="button"
          onClick={() => setStep("sign-in")}
          className="text-sm text-gray-500 hover:text-primary transition-colors hover:underline self-center font-medium"
        >
          Voltar para login
        </button>
      </form>
    </motion.div>
  );
}
