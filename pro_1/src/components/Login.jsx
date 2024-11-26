import React, { useEffect } from 'react';
import { Button, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { useData } from '../contextApi//Data'

function Login() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { setList, list } = useData()



    const getData = (data) => {
        setList((pre) => [{ id: Math.floor(Math.random() * 100), data: data.data }, ...pre])
        reset()
    }

    useEffect(() => {
        if (list && list.length > 0) {
            localStorage.setItem('list', JSON.stringify(list))
        }

    }, [list])

    useEffect(() => {
        const datas = localStorage.getItem('list')
        if (datas && datas.length > 0) {
            setList(JSON.parse(datas))
        }
    }, [list])

    return (
        <>
            <div className='flex items-center justify-center h-screen w-full bg-blue-300'>
                <form className="max-w-sm mx-auto" onClick={handleSubmit(getData)}>
                    <div className="mb-5">
                        <FormControl className=''>
                            <InputLabel htmlFor="Data">Enter Data</InputLabel>
                            <Input id="Data" {...register('data', {
                                required: true,
                            })} />
                        </FormControl>
                    </div>
                    <Button variant="contained" endIcon={<SendIcon />} >
                        Send
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Login;
