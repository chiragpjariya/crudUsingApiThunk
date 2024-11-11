import React from 'react';
import { useForm } from 'react-hook-form';

const GetValuesExample = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    // Retrieve and log form values
    const handleGetValues = () => {
        const values = getValues()  // Get all form values
        console.log("Current Form Values:", values);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

            <div>
                <button type="button" onClick={handleGetValues}>
                    Get Current Form Values
                </button>
            </div>
        </div>
    );
};

export default GetValuesExample;
