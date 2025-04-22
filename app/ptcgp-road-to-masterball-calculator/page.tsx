'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from 'radix-ui';
import { Button } from '@radix-ui/themes';

import WinRateDropdown from './components/win-rate-dropdown';

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
    <Form.Root className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        Calculation: Average points per game = (Win Rate * 10) + ((1 - Win Rate)
        * -7)
      </div>
      <hr />

      <WinRateDropdown />

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
      <Form.Submit className="rt-reset rt-BaseButton rt-r-size-2 rt-variant-solid rt-Button">
        Submit
      </Form.Submit>
    </Form.Root>
  );
};

export default RoadToMasterballCalculator;
