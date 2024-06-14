import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const price = cart.reduce((sum, item) => item.price + sum, 0);
    const total = parseFloat(price.toFixed(2))


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sa-summer-camp-server-six.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Dashboard | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-40 items-center flex justify-evenly">
                <h3 className="text-3xl">Total Class: {cart.length}</h3>
                <h3 className="text-3xl ">Total Price: ${total}</h3>
               <Link to='/dashboard/payment'><button className="bg-teal-600 hover:bg-teal-800 btn btn-sm text-white ">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white "><FaTrashAlt></FaTrashAlt></button>
                                </td>
    
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;