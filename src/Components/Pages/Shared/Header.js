import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Image/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li className='hover:text-orange-500'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-500'><Link to="/items">Inventory</Link></li>
        {
            user && <>
                <li className='hover:text-orange-500'><Link to="/addItem">Add Item</Link></li>
                <li className='hover:text-orange-500'><Link to="/manageItem">Manage Item</Link></li>
                <li className='hover:text-orange-500'><Link to="/myItem">My Item</Link></li>
            </>
        }
        {
            user ?
                <li className='hover:text-orange-500 pt-3' onClick={handleSignOut}>sign out</li>
                :
                <li className='hover:text-orange-500'><Link to="/login">Login</Link></li>
        }


    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-30 h-20' src={logo} alt="" />
                    <a className="uppercase font-bold pt-6 text-2xl">
                        <span className='text-orange-500'>Gadget</span>
                        World</a>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;