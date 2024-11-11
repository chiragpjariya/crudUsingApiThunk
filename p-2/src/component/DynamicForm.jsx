import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const DynamicForm = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      emails: [{ email: '' }]  // Default value for the email array
    }
  });

  // useFieldArray hook for managing dynamic email fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails'  // Name of the field array
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Loop through the email fields */}
        {fields.map((item, index) => (
          <div key={item.id}>
            <label>Email {index + 1}:</label>
            <div>
              <Controller
                name={`emails[${index}].email`}
                control={control}
                defaultValue={item.email}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Enter email"
                  />
                )}
              />
              {errors.emails?.[index]?.email && (
                <p style={{ color: 'red' }}>Email is required</p>
              )}

              {/* Remove button */}
              <button type="button" onClick={() => remove(index)}>
                Remove Email
              </button>
            </div>
          </div>
        ))}

        {/* Button to append new email field */}
        <button type="button" onClick={() => append({ email: '' })}>
          Add Email
        </button>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
