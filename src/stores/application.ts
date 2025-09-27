import { create } from "zustand";
import type { FinancesForm, PersonalForm } from "../types/application";

type Store = {
  personalForm: PersonalForm;
  financesForm: FinancesForm;
  setPersonalForm: (p: PersonalForm) => void;
  setFinancesForm: (f: FinancesForm) => void;
  resetAll: () => void;
};

const emptyPersonalForm: PersonalForm = {
  fullName: "",
  email: "",
  dob: "",
};

const emptyFinancesForm: FinancesForm = {
  employmentType: "",
  income: null,
  termsAccepted: false,
};

export const useApplicationStore = create<Store>((set) => ({
  personalForm: emptyPersonalForm,
  financesForm: emptyFinancesForm,
  setPersonalForm: (data) => set({ personalForm: data }),
  setFinancesForm: (data) => set({ financesForm: data }),
  resetAll: () =>
    set({ personalForm: emptyPersonalForm, financesForm: emptyFinancesForm }),
}));
