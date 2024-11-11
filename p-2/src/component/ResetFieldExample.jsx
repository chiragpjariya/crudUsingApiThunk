import React from 'react';
import { useForm } from 'react-hook-form';

const ResetFieldExample = () => {
  // Initialize the form
  const { register, handleSubmit, resetField, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: ''
    }
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: 'Name is required' })}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <p style={{ color: 'red' }}>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email', { required: 'Email is required' })}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>

      <button type="button" onClick={() => resetField('name')}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        Reset Name Field
      </button>
      <button type="submit"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    >Submit</button>
    </form>
  );
};

export default ResetFieldExample;
