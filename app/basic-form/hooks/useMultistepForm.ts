import { useState } from 'react';

export type multiStepFormType = {
  back: () => void;
  goTo: (i: number) => void;
  next: () => void;
  totalSteps: number;
  currentStepIdx: number;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const useMultistepForm = (totalSteps: number): multiStepFormType => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    setCurrentStepIdx((i) => {
      if (i >= totalSteps - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIdx((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (i: number) => {
    setCurrentStepIdx(i);
  };

  return {
    back,
    goTo,
    next,
    totalSteps,
    currentStepIdx,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === totalSteps - 1,
  };
};

export default useMultistepForm;
