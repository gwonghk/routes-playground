import useMultistepForm from '../hooks/useMultistepForm';

const Step = () => {
  const { currentStepIdx, steps, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<div>one</div>, <div>two</div>]);

  return (
    <div className="flex justify-between">
      <div>
        {currentStepIdx + 1} / {steps.length}
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
          type="submit"
          disabled={isLastStep}
          className="mr-2 w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          {'>'}
        </button>
      </div>

      <div>{step}</div>
    </div>
  );
};

export default Step;
