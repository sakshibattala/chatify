import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: {
    name: "John Doe",
    age: 22,
  },
  isLoggedIn: false,
  isLoading: true,

  login: () => {
    set({ isLoading: false, isLoggedIn: true });
  },
}));
