import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiShoppingCart    } from 'react-icons/fi';
import UseCart from "../../Hooks/UseCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const NavItem = <>
        <NavLink className='text-xl font-bold mr-4' to='/' ><li>Home</li></NavLink>
        {/* <NavLink className='text-xl font-bold mr-4' to='/' ><li>CONTACT us</li></NavLink> */}
        {/* <NavLink className='text-xl font-bold mr-4' to='/' ><li>DASHBOARD</li></NavLink> */}
        <NavLink className='text-xl font-bold mr-4' to='/menu' ><li>Our Menu</li></NavLink>
        <NavLink className='text-xl font-bold mr-4' to='/orderFood/salad' ><li>Order Food</li></NavLink>
        <NavLink className='text-xl font-bold mr-4' to='/secret' ><li>Secret</li></NavLink>
        <li>
            <Link to='/dashboard/cart'>
                <button className="">
                       
                    <div className="badge badge-secondary"> <FiShoppingCart ></FiShoppingCart> +{cart.length}</div>
                </button>
            </Link>
        </li>



        {
            user ? <>
           {/* <span className='text-xl font-bold mr-4 text-yellow-400'>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="text-xl font-bold mr-4">Log Out</button> 
            </> :
                <>
                    <Link className='text-xl font-bold mr-4' to='/login' ><li>Login</li></Link>
                </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-20 text-white max-w-7xl mx-auto bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItem}
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-3xl font-black">BISTRO BOSS</h1>
                        <p className="text-2xl font-bold">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItem}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </>
    );
};

export default NavBar;