import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SetValueExample = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    const [selectedUser, setSelectedUser] = useState('');

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    // Simulate user data
    const users = [
        { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    ];

    // Handle dropdown change to set email value based on selected user
    const handleUserSelect = (e) => {
        const userId = e.target.value;
        setSelectedUser(userId);

        // Find the user and set their email using setValue
        const user = users.find((user) => user.id === userId);
        if (user) {
            setValue('email', user.email);  // Set email field value
        }
    };

     console.log("++++++",watch('name'));
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input
                        onChange={e => setValue("name",e.target.value)}
                    />
                    <p style={{ color: 'red' }}>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Select User:</label>
                    <select onChange={handleUserSelect} value={selectedUser}>
                        <option value="">Select a user</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        {...register("email", { required: "Email is required" })}
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

export default SetValueExample;
