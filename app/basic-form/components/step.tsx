import { multiStepFormType } from '../hooks/useMultistepForm';

const Step = ({ stepProps }: { stepProps: multiStepFormType }) => {
  const { currentStepIdx, totalSteps, isFirstStep, isLastStep, back, next } =
    stepProps;

  return (
    <div className="flex justify-between">
      <div>
        {currentStepIdx + 1} / {totalSteps}
      </div>

      <div>
        <button
          type="button"
          onClick={back}
          disabled={isFirstStep}
          className="mr-2 w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={isLastStep}
          className="mr-2 w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          {'>'}
        </button>
      </div>

      <div>{currentStepIdx + 1}</div>
    </div>
  );
};

export default Step;
