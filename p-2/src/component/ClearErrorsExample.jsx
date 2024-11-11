import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ClearErrorsExample = () => {
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    setFormSubmitted(true); // Update state to show the form submission status
  };

  const handleNameChange = () => {
    // Clear errors on the "name" field when the user starts typing again
    clearErrors("name");
  };

  const handleReset = () => {
    // Clear all form errors
    clearErrors();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input 
            {...register("name", { required: "Name is required" })}
            onChange={handleNameChange}
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

        <div>
          <button type="button" onClick={handleReset}>Clear Errors</button>
        </div>
      </form>

      {formSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default ClearErrorsExample;

