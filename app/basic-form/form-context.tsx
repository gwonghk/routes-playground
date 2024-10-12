'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export const FormContext = createContext({});

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
