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
  company?: {
    name: string;
    industry: string;
  };
  createdAt?: any;
};
