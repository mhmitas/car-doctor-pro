"use client"
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { GoX } from "react-icons/go";
import toast from 'react-hot-toast';
import Link from 'next/link';


const MyBookingsPage = () => {
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const session = useSession()
    console.log(session?.data?.user?.email);

    async function loadData() {
        if (!session?.data?.user?.email) {
            return
        }
        setIsLoading(true)
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/get-all/${session?.data?.user?.email}`)
        console.log(res.data);
        setBookings(res.data)
        setIsLoading(false)
    }

    useEffect(() => {
        loadData()
    }, [session?.status])

    async function handleDelete(id) {
        const ask = confirm('Do you want to remove this service form your cart')
        if (!ask) { return }
        try {
            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/delete-booking/${id}`)
            console.log(data);
            if (data?.deletedCount > 0) {
                const updateBookings = bookings.filter(b => b._id !== id)
                setBookings(updateBookings)
                toast.success('Service Removed')
            }
        } catch (err) {
            console.error(err);
        }
    }
    async function handleClearCart() {
        const ask = confirm('Do you want to clear all bookings')
        if (!ask) { return }
        try {
            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/clear-cart/${session?.data?.user?.email}`)
            console.log(data);
            if (data?.deletedCount > 0) {
                // setBookings([])
                await loadData()
                toast.success('Cart Cleared')
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (session?.status === 'loading') {
        return <span className='absolute top-1/2 left-1/2'>Loading...</span>
    }

    return (
        <Container>
            <Heading heading={'My Bookings'} />
            <div className=' max-w-5xl mx-auto relative'>
                {isLoading && <span className='absolute top-1/2 left-1/2'>Loading...</span>}
                <div className="flex flex-col space-y-4 bg-base-100 p-4">
                    {bookings.map((item) => (
                        <div key={item._id} className="flex items-center border-b pb-4">
                            <button onClick={() => handleDelete(item?._id)} className="btn hover:btn-error btn-circle btn-sm text-lg btn-outline mr-4">
                                <GoX size={25} />
                            </button>
                            <div className="flex-shrink-0">
                                <Image src={item.serviceImg} alt={item.serviceTitle} width={60} height={60} className="rounded" />
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="text-lg font-medium">{item.serviceTitle}</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${item.servicePrice}</p>
                                <p className="text-gray-500">{item.bookingData?.service_taking_date}</p>
                            </div>
                            <div className="ml-4">
                                <button className="btn btn-warning btn-sm">{item.status}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-6">
                    <Link href={'/#services'} className="btn btn-outline">
                        < MdArrowBack size={25} />
                        Continue Shopping
                    </Link>
                    <button onClick={handleClearCart} className="btn btn-outline btn-error">
                        <GoX size={25} />
                        Clear Shopping Cart
                    </button>
                </div>
            </div>
        </Container>
    );
};


export default MyBookingsPage;