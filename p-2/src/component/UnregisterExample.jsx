
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
function UnregisterExample() {
    const { register, handleSubmit, unregister, watch, formState: { errors } } = useForm();
  
  // Watch the value of the checkbox to determine if phone field should be registered or not
  const contactByPhone = watch("contactByPhone", false);

  // Automatically unregister phone field when "Contact by Phone" is unchecked
  useEffect(() => {
    if (!contactByPhone) {
      unregister("phone");
    }
  }, [contactByPhone, unregister]);

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
        <input type="checkbox" {...register('contactByPhone')} />
        Contact by Phone
      </label>
    </div>

    {contactByPhone && (
      <div>
        <label>Phone:</label>
        <input 
          {...register('phone', { 
            required: 'Phone number is required if Contact by Phone is checked', 
            pattern: {
              value: /^[0-9]+$/,
              message: 'Phone number must be numeric'
            }
          })} 
        />
        <p style={{ color: 'red' }}>{errors.phone?.message}</p>
      </div>
    )}

    <button type="submit">Submit</button>
  </form>
  )
}

export default UnregisterExample