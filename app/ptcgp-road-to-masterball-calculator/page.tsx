'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
};

const RoadToMasterballCalculator = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('data', data);
  };

  return (
    <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="number-input"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a number:
      </label>
      <input
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        type="number"
        defaultValue="123"
        {...register('example')}
      />

      <button
        type="submit"
        className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default RoadToMasterballCalculator;
