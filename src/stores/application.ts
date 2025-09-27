import { create } from "zustand";
import type { PersonalForm } from "../types/application";

type Store = {
  personalForm: PersonalForm;
  setPersonalForm: (p: PersonalForm) => void;
  resetAll: () => void;
};

const emptyPersonalForm: PersonalForm = {
  fullName: "",
  email: "",
  dob: "",
};

export const useApplicationStore = create<Store>((set) => ({
  personalForm: emptyPersonalForm,
  setPersonalForm: (data) => set({ personalForm: data }),
  resetAll: () => set({ personalForm: emptyPersonalForm }),
}));
