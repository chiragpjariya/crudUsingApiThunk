import React from 'react';
import { useForm } from 'react-hook-form';

const SetErrorExample = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  // Mock database of usernames
  const existingUsernames = ["john_doe", "jane_doe", "user123"];

  // Form submission handler
  const onSubmit = (data) => {
    if (existingUsernames.includes(data.username)) {
      // Set an error on the username field if it already exists
      setError("username", {
        message: "This username is already taken"
      });
    } else {
      console.log("Form Submitted Successfully:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input {...register("username", { required: "Username is required" })} />
        <p style={{ color: 'red' }}>{errors.username?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input {...register("email", { required: "Email is required" })} />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SetErrorExample;
