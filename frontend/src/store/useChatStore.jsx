import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
  contacts: [],
  chats: [],
  messages: [],
  activeTab: "chats",
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

  setActiveTab: (tab) => set({ activeTab: tab }),

  setSelectedUser: (selectedUser) => {
    set({ selectedUser });
  },

  toggleSound: () => {
    localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
    set({ isSoundEnabled: !get().isSoundEnabled });
  },

  getContacts: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/contacts");
      set({ contacts: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in getContacts:", error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getChatPartners: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/chats");
      set({ chats: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in getChatPartners:", error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessagesByUserId: async (user) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${user._id}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ isMessagesLoading: false });
    }
  },
}));
