import data from '../data.json';
import { generateState } from '@/lib/util';
import { createContext, useContext, useState, type ReactNode } from 'react';

type FormField = (typeof data.fields)[number];

type FormState = {
  [K in FormField['name']]: string | boolean;
};

type FormContextType = {
  form: FormState;
  setForm: (form: FormState) => void;
  updateField: (field: keyof FormState, value: string | boolean) => void;
};

const defaultState: FormState = generateState(data.fields);

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<FormState>(defaultState);

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return <FormContext.Provider value={{ form, setForm, updateField }}>{children}</FormContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
