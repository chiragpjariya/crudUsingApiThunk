import React from 'react';
import { useForm } from 'react-hook-form';

const SetFocusExample = () => {
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  // Focus on the 'email' field if there's an error
  const handleValidation = () => {
    if (errors.email) {
      setFocus("name");  // Set focus on the email input field if there's an error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        handleValidation();
        onSubmit(data);
      })}>
        <div>
          <label>Name:</label>
          <input 
            {...register("name", { required: "Name is required" })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format"
              }
            })}
          />
          <p style={{ color: 'red' }}>{errors.email?.message}</p>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SetFocusExample;
