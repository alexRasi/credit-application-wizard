import { create } from "zustand";
import type { PersonalForm } from "../types/application";

type Store = {
  personalForm: PersonalForm;
  setPersonalForm: (p: PersonalForm) => void;
  resetStore: () => void;
};

const emptyPersonalForm: PersonalForm = {
  fullName: "",
  email: "",
  date: "",
};

export const useApplicationStore = create<Store>((set) => ({
  personalForm: emptyPersonalForm,
  setPersonalForm: (data) => set({ personalForm: data }),
  resetStore: () => set({ personalForm: emptyPersonalForm }),
}));
