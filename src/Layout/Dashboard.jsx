import { NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaCalendar, FaCalendarCheck, FaHistory, FaHome, FaSearch, FaShoppingCart} from 'react-icons/fa'
import UseCart from "../Hooks/UseCart";


const Dashboard = () => {
    const [cart] = UseCart();
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/paymentHistory'><FaHistory></FaHistory> Payment History</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/addReview'><FaAddressBook></FaAddressBook> Add Review</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/dashboard/myBooking'><FaCalendarCheck></FaCalendarCheck> My Booking</NavLink></li>
                </ul>
                <div className="divider"></div>
                <ul className="menu p-2 ">
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                </ul>
                <ul className="menu p-2 ">
                    <li><NavLink to='/menu'><FaSearch></FaSearch> Menu</NavLink></li>
                </ul>
               
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;