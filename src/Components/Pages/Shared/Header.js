import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.png'

const Header = () => {
    const menuItems = <>
        <li className='hover:text-orange-500'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-500'><Link to="/services">Inventory</Link></li>
        <li className='hover:text-orange-500'><Link to="/login">Login</Link></li>
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