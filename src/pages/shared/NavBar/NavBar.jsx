import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from 'react-icons/fa'
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user && <li><Link to='/dashboard/mycart'>Dashboard</Link></li>}
    </>
    return (
        <>
            <div className="navbar bg-base-100 w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="text-xl">SA Camp</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>
                        <button className="btn ">
                            <FaCartPlus></FaCartPlus>
                            <div className="badge bg-teal-600 text-white ">+{cart?.length || 0}</div>
                        </button>
                    </Link>
                    {
                        user ?
                            <>
                                <img src={user?.photoURL} className="rounded-full w-10 h-10 mx-2   bg-red-500" alt="" />
                                <button className="btn btn-ghost btn-sm" onClick={handleLogOut}>LogOut</button>
                            </> :
                            <>
                                <button className="btn btn-sm btn-ghost"><Link to='/login'>Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;