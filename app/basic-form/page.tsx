'use client';

import type { FormEvent } from 'react';
import { FormProvider } from './form-context';

import FormField from './components/formField';
import Step from './components/step';

const fields = [
  {
    id: 'first_name',
    label: 'First name',
    placeholder: 'John',
    type: 'text',
  },
  {
    id: 'last_name',
    label: 'Last name',
    placeholder: 'Doe',
    type: 'text',
  },
  {
    id: 'company',
    label: 'Company',
    placeholder: 'Flowbite',
    type: 'text',
  },
  {
    id: 'phone',
    label: 'Phone',
    placeholder: '123-45-678',
    type: 'tel',
  },
  {
    id: 'website',
    label: 'Website',
    placeholder: 'flowbite.com',
    type: 'url',
  },
  {
    id: 'visitors',
    label: 'Unique visitors (per month)',
    placeholder: '',
    type: 'number',
  },
];

const Page = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <FormProvider>
      <form onSubmit={handleSubmit}>
        <div>
          <Step />
          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {fields.map(({ id, label, placeholder, type }) => (
            <FormField
              key={id}
              id={id}
              label={label}
              placeholder={placeholder}
              type={type}
            />
          ))}
        </div>
        {/* <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="text-white-900 ms-2 text-sm font-medium dark:text-gray-300"
          >
            I agree with the{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div> */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Page;
