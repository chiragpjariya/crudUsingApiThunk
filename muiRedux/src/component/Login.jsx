import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { setData } from '../redux/userSlice'
import { useDispatch } from 'react-redux';



function Login() {

    const dispatch = useDispatch()

    const schema = yup.object({
        userName: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
        userPassword: yup
            .string()
            .max(8, 'Password must not exceed 8 characters')
            .required('Password is required'),
    }).required();


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const setDatas = (data) => {
        console.log(data);
        
        dispatch(setData({ userName: data.userName, userPassword: data.userPassword }));
        console.log('working');
        
        reset()
    }

    return (
        <>
            <div className="h-[350px] w-2/4  border-2 border-black rounded-lg flex  flex-col  items-center backdrop-blur-md bg-white/30">
                <form className='size-[100%]' onSubmit={handleSubmit(setDatas)}>
                    <div className='h-28 w-full flex items-center justify-center flex-col'>
                        <TextField
                            helperText=""
                            {...register('userName')}
                            type='text'
                            id="demo-helper-text-aligned"
                            label="User Name"
                            sx={{
                                '& .MuiInputLabel-root': { color: 'white' }, // Label color,
                                '&:hover .MuiInputLabel-root': { color: 'black', fontSize: '18px' },
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Border color
                                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Hover border color
                                '& .MuiOutlinedInput-input': { color: 'white' } // Text color
                            }}
                        />
                        <p className='text-red-800'>{errors.userName?.message}</p>
                    </div>
                    <div className='h-28 w-full flex items-center justify-center flex-col'>
                        <TextField
                            {...register('userPassword')}
                            type='password'
                            helperText=''
                            id="demo-helper-text-aligned"
                            label="User Password"
                            sx={{
                                '& .MuiInputLabel-root': { color: 'white' }, // Label color,
                                '&:hover .MuiInputLabel-root': { color: 'black', fontSize: '18px' },
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Border color
                                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Hover border color
                                '& .MuiOutlinedInput-input': { color: 'white' } // Text color
                            }}
                        />

                        <p className='text-red-800'>{errors.userPassword?.message}</p>
                    </div>
                    <div className='h-28 w-full flex items-center justify-center'>
                        <Button variant="contained"
                            endIcon={<SendIcon />}
                            size="small"
                            sx={{ width: '222px' }}
                            type='submite'
                        >
                            Send
                        </Button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Login