'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Field = ({
  id,
  label,
  placeholder,
  type = 'text',
  onBlur,
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  onBlur: ({}) => void;
  required?: boolean;
}) => {
  const [value, setValue] = useState('');

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleOnBlur = (e: FormEvent<HTMLInputElement>) => {
    onBlur({ [id]: value });
    e.preventDefault();
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
      >
        {label}
      </label>
      <input
        value={value}
        onInput={handleOnInput}
        onBlur={handleOnBlur}
        type={type}
        id={id}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Field;
