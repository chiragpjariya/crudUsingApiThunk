import React from 'react';
import { useForm } from 'react-hook-form';

const TriggerExample = () => {
    const { register, handleSubmit, trigger, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    // Manually trigger validation for the 'email' field
    const validateEmail = async () => {
        const result = await trigger("email"); // Trigger validation for 'email' field only
        console.log("Email Field Validation Result:", result);
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
                <button type="button" onClick={validateEmail}>
                    Validate Email
                </button>
            </div>
        </div>
    );
};

export default TriggerExample;
