import { FaEdit } from "react-icons/fa";
import useClasses from "../../../../hooks/useClasses";

const MyClass = () => {
    const [classes] = useClasses();
    console.log(classes)
    return (
        <div className="w-10/12 py-10">
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
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr
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
                                   <button className="text-lg text-teal-600 hover:text-teal-800"><FaEdit></FaEdit></button>
                                </td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;