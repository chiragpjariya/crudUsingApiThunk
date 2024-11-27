import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

function Display() {

    const users = useSelector((state) => state.user.list);
    console.log(users);

    return (
        <>
            <TableContainer component={Paper} className='backdrop-blur-md bg-white/30'>
                <Table sx={{ minWidth: 220 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length > 0 && users.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell component="th" scope="row">
                                    {data.id}
                                </TableCell>
                                <TableCell  scope="row">
                                    {data.userName}
                                </TableCell>
                                <TableCell >
                                    {data.userPassword}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Display