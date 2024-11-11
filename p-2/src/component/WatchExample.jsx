import React from 'react';
import { useForm } from 'react-hook-form';

const WatchExample = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Watch the "subscribe" checkbox value
  const isSubscribed = watch("subscribe", false);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: 'Name is required' })} />
        <p style={{ color: 'red' }}>{errors.name?.message}</p>
      </div>

      <div>
        <label>
          <input type="checkbox" {...register('subscribe')} />
          Subscribe to Newsletter
        </label>
      </div>

      {isSubscribed && (
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            {...register('email', { 
              required: 'Email is required when subscribing', 
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                message: 'Invalid email address' 
              } 
            })} 
          />
          <p style={{ color: 'red' }}>{errors.email?.message}</p>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default WatchExample;
