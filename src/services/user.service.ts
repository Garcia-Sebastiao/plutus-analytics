import { db } from "@/lib/firebase";
import { type UserProps } from "@/types/user.types";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export const userService = {
  async syncUser(user: UserProps): Promise<void> {
    const userRef = doc(db, "users", user.id);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const newUser: Omit<UserProps, "createdAt"> = {
        id: user.id,
        name: user.name || "Usuário",
        email: user.email,
        avatar: user.avatar || "",
        preferences: {
          currency: "EUR",
          theme: "light",
        },
        company: {
          name: "Minha Startup",
          industry: "Tecnologia",
        },
      };

      await setDoc(userRef, {
        ...newUser,
        createdAt: serverTimestamp(),
      });
    }
  },

  async getUser(uid: string): Promise<UserProps | null> {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as UserProps) : null;
  },
};
