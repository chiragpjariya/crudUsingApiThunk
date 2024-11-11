import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select'; // React Select is a third-party library for select dropdown

const ControlExample = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  const [first, setfirst] = useState()
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input 
            {...control.register("name", { required: "Name is required" })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </div>

        <div>
          <label>Favorite Color:</label>
          <Controller
            name="favoriteColor"
            control={control}  // The control object is passed to the Controller
            rules={{ required: "Color is required" }}  // Validation rule
            render={({ field }) => (
              <Select
                {...field}  // Spread the field props (value, onChange, etc.) to the custom component
                options={[
                  { value: 'red', label: 'Red' },
                  { value: 'green', label: 'Green' },
                  { value: 'blue', label: 'Blue' }
                ]}
              />
            )}
          />
          <p style={{ color: 'red' }}>{errors.favoriteColor?.message}</p>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <input type="text" value={first} onChange={(e)=> setfirst(e.target.value)} />
    </div>
  
  );
};

export default ControlExample;
