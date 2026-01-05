import { db } from "@/lib/firebase";
import { type CompanyProps, type UserProps } from "@/types/user.types";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export const userService = {
  async syncUser(uid: string): Promise<UserProps | null> {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as UserProps) : null;
  },

  async createUser(userData: UserProps): Promise<void> {
    const userRef = doc(db, "users", userData.id);
    await setDoc(userRef, {
      ...userData,
      createdAt: serverTimestamp(),
    });
  },

  async createCompany(company: CompanyProps): Promise<void> {
    const companyRef = doc(db, "companies", company.id);
    await setDoc(companyRef, {
      ...company,
      createdAt: serverTimestamp(),
    });
  },

  async getUser(uid: string): Promise<UserProps | null> {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as UserProps) : null;
  },
};