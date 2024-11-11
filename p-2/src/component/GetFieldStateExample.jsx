import React from 'react';
import { useForm } from 'react-hook-form';

const GetFieldStateExample = () => {
    const { register, handleSubmit, getFieldState, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    // Get the field state of a specific field (e.g., 'name')
    const getNameFieldState = () => {
        const nameFieldState = getFieldState("name"); // Get state for the 'name' field
        console.log("Name Field State:", nameFieldState);
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
                <button type="button" onClick={getNameFieldState}>
                    Get Name Field State
                </button>
            </div>
        </div>
    );
};

export default GetFieldStateExample;
