/* eslint-disable @typescript-eslint/no-explicit-any */
export type TransactionProps = {
  userId: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: "marketing" | "salary" | "infra" | "software";
  date: any;
  status: "paid" | "pending";
  createdAt: any;
};
