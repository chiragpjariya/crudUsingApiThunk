import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: yup.string()
        .required('Email is required')
        .email('Please enter a valid email'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(8, 'Password cannot exceed 8 characters'),
});