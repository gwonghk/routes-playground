import { useState } from 'react';
import type { ReactElement } from 'react';

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    setCurrentStepIdx((i) => {
      if (i >= steps.length - 1) return i;
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
    step: steps[currentStepIdx],
    steps,
    currentStepIdx,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
  };
};

export default useMultistepForm;
