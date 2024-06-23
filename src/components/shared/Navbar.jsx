import Link from 'next/link';
import React from 'react';
import { FaCarAlt, FaTruck } from "react-icons/fa";

const Navbar = () => {

    const navItems = [
        { title: 'About', path: '/about', status: 'public' },
        { title: 'Services', path: '/services', status: 'public' },
        { title: 'Blog', path: '/blog', status: 'public' },
        { title: 'Contacts', path: '/Contacts', status: 'public' },
    ]

    return (
        <div className="navbar bg-base-100 z-20 shadow-md">
            <div className="flex-1">
                <Link href={'/'} className="py-2 px-4 rounded-md font-semibold text-xl bg-gradient-to-r from-blue-600 to-rose-600 border-none hover:from-blue-500 hover:to-rose-500 text-white">Car Doctors Pro</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(item => <li><Link href={item.path}>{item.title}</Link></li>)}
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaTruck size={25} />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;