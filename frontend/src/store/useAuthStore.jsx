import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,

  isChecking: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isChecking: false });
    }
  },

  isSigningUp: false,
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });

      toast.success(`"You're in! Welcome."`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  isLoggingIn: false,
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });

      toast.success(`Welcome back ${res.data.fullName}!`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      set({ authUser: null });

      toast.success("Catch You Later");
    } catch (error) {
      toast.error("Error logging out");
      console.log("Logout error:", error);
    }
  },

  isProfileUpdating: false,
  updateProfile: async (profilePic) => {
    set({ isProfileUpdating: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", profilePic);
      set({ authUser: res.data });
      toast.success("Your profile looks great now!");
    } catch (error) {
      console.log("Error in updateProfile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isProfileUpdating: false });
    }
  },
}));
