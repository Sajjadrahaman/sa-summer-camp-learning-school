import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import {FaUserSecret, FaUserShield,} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://sa-summer-camp-server-six.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an  Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://sa-summer-camp-server-six.vercel.app/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an  Instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    return (
        <div>
            <Helmet>
                <title>Dashboard | ManageUser</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=" bg-[#cef7f4d0] ">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructor</th>
                            <th>Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index )=> <tr
                                key={user._id}
                                >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'instructor' ? 'Instructor' : <button onClick={()=> handleMakeInstructor(user)} className="btn btn-ghost btn-sm bg-teal-600 text-white "><FaUserShield></FaUserShield></button>}</td>
                                <td>{user.role == 'admin' ? 'admin' : <button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-orange-600 text-white "><FaUserSecret></FaUserSecret></button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;