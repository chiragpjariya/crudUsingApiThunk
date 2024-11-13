import {useUserContext} from '../context/UserContext'

function Lists() {

    // const [userList, setlist] = useState([{ name: 'chirag', email: "cj@gmail.com", password: '123456' }])

    const {userList} = useUserContext()
   
    return (
        <>
            <div className=" overflow-x-auto shadow-md   w-full mr-7 h-2/3">
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                E-mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                          

                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((val, index) => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={index}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {val.name}
                                </th>
                                <td className="px-6 py-4"> {val.email}</td>
                                <td className="px-6 py-4"> {val.password}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </>
    )
}

export default Lists