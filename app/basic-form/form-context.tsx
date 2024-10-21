'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const initialFormState = {};
type FormStateType = typeof initialFormState;
type ContextType = [
  FormStateType,
  React.Dispatch<React.SetStateAction<FormStateType>>,
];

export const FormContext = createContext<ContextType>(
  [] as unknown as ContextType,
);

// @ts-expect-error
export const FormProvider = ({ children }) => {
  const value = useState({});
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormState must be within FormProvider');
  }
  return context;
};
