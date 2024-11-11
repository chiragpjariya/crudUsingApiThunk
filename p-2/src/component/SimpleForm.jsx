import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select from 'react-select'; // You can replace this with any select dropdown or custom component

// Define the validation schema using Yup
const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    agree: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
    favoriteColor: Yup.string().required('Favorite color is required')
});

const SimpleForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // Submit handler
    const onSubmit = (data) => {
        console.log('Form Data Submitted:', data);
    };

    return (
        <div>
            <h1>Simple Form Example</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        {...control.register("name")}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...control.register("email")}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div>
                    <label>Agree to Terms:</label>
                    <input
                        type="checkbox"
                        {...control.register("agree")}
                    />
                    {errors.agree && <p style={{ color: 'red' }}>{errors.agree.message}</p>}
                </div>

                <div>
                    <label>Favorite Color:</label>
                    <Controller
                        name="favoriteColor"
                        control={control}
                        rules={{ required: 'Favorite color is required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: 'red', label: 'Red' },
                                    { value: 'green', label: 'Green' },
                                    { value: 'blue', label: 'Blue' }
                                ]}
                                onChange={(selectedOption) => {
                                    field.onChange(selectedOption?.value);  // Only set the value, not the full object
                                }}
                                value={field.value ? { value: field.value, label: field.value.charAt(0).toUpperCase() + field.value.slice(1) } : null}  // Set the value as an object with label
                            />
                        )}
                    />
                    {errors.favoriteColor && <p style={{ color: 'red' }}>{errors.favoriteColor.message}</p>}
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SimpleForm;
