"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdCarRepair } from "react-icons/md";

const Navbar = () => {
    const navItems = [
        { title: 'About', path: '/about', status: 'public' },
        { title: 'Services', path: '/services', status: 'public' },
        { title: 'Blog', path: '/blog', status: 'public' },
        { title: 'Contacts', path: '/Contacts', status: 'public' },
    ]
    const session = useSession()
    // console.log(session);

    return (
        <div className="navbar bg-base-100 z-20 shadow-md">
            <div className="flex-1">
                <Link href={'/'} className="py-2 px-4 rounded-md font-semibold text-xl bg-gradient-to-r from-blue-600 to-rose-600 border-none hover:from-blue-500 hover:to-rose-500 text-white">Car Doctors Pro</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(item => <li key={item.path}><Link href={item.path}>{item.title}</Link></li>)}
                </ul>
                {session.status === 'loading' && <span>Loading...</span>}
                {session.status === 'authenticated' && <UserSection session={session} />}
                {session.status === 'unauthenticated' &&
                    <div className='flex gap-2 items-center'>
                        <Link href={'/sign-in'}><button className='btn btn-sm btn-primary btn-outline rounded-sm'>Sign In</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;



{/* <Link href={'/sign-up'}><button className='btn btn-sm btn-primary btn-outline rounded-sm'>Sign Up</button></Link> */ }

function UserSection({ session }) {
    return (
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <MdCarRepair size={25} />
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-lg rounded-md">
                    <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary w-full btn-sm">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full" title={session?.data?.user?.name}>
                        <Image alt={session?.data?.user?.name} src={session?.data?.user?.image || 'https://i.ibb.co/82Q38CP/new-profile.png'} width={50} height={50} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                    <li><button onClick={signOut}>Sign Out</button></li>
                </ul>
            </div>
        </>
    )
}
