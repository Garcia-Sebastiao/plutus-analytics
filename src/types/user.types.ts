/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserProps = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences?: {
    currency: "EUR";
    theme: "light" | "dark";
  };
  companyId: string;
  createdAt?: any;
};

export type CompanyProps = {
  id: string;
  name: string;
  employees: number;
  amount: number;
  industry: string;
  ownerId: string;
};

export type CollaboratorType = {
  id: string;
  name: string;
  role: string;
  email?: string;
  salary: string;
};
