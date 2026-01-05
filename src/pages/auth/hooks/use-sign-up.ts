import { userService } from "@/services/user.service";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuid } from "uuid";
import type { CompanyProps, UserProps } from "@/types/user.types";

export const signUpSchema = yup
  .object({
    companyName: yup
      .string()
      .required("O nome da empresa é obrigatório")
      .min(3, "Nome muito curto"),
    industry: yup.string().required("O setor de atuação é obrigatório"),
    employees: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Número de funcionários é obrigatório")
      .min(1, "Pelo menos 1 funcionário"),
    amount: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("O saldo inicial é obrigatório")
      .min(0, "O saldo não pode ser negativo"),
  })
  .required();

export type SignUpFormData = yup.InferType<typeof signUpSchema>;

export function useSignUp() {
  const navigate = useNavigate();
  const { tempUser, setStep } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("in", tempUser)
    if (!tempUser || loading) return;
    setLoading(true);


    console.log("opps")

    try {
      const companyId = uuid();

      const companyData: CompanyProps = {
        id: companyId,
        name: data.companyName,
        industry: data.industry,
        employees: data.employees,
        amount: data.amount,
        ownerId: tempUser.id!,
      };

      await userService.createCompany(companyData);

      const userData: UserProps = {
        ...(tempUser as UserProps),
        companyId,
        preferences: {
          currency: "EUR",
          theme: "light",
        },
      };

      await userService.createUser(userData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao finalizar cadastro:", error);
    } finally {
      setLoading(false);
    }
  });

  return { onSubmit, loading, control, errors, setStep, register };
}
