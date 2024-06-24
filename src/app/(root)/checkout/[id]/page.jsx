"use client"
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import { getServiceDetails } from '@/services/getServices';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const CheckoutPage = ({ params }) => {
    const [service, setService] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { title, img, price, } = service;
    const { register, handleSubmit, reset } = useForm()
    const session = useSession()
    // console.log({ session });

    useEffect(() => {
        loadService()
    }, [])
    const loadService = async () => {
        setIsLoading(true)
        try {
            const service = await getServiceDetails(params.id)
            setService(service)
            setIsLoading(false)
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }
    }

    async function onSubmit(data) {
        const checkoutData = {
            serviceTitle: title,
            serviceImg: img,
            servicePrice: price,
            bookingData: data,
            userName: session?.data?.user?.name,
            userEmail: session?.data?.user?.email,
            userImage: session?.data?.user?.image,
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/api/new-booking`, checkoutData)
            console.log(res.data);
            if (res?.data.insertedId) {
                toast.success('Booked successfully')
                reset()
            }
        } catch (err) {
            console.error('Service Not Booked', err);
        }
    }


    if (isLoading || session?.status === 'loading') {
        return <span className='absolute top-1/2 left-1/2'>Loading...</span>
    }

    return (
        <Container>
            {/* Checkout Page {params.id} */}
            <Heading heading={'Checkout Form'} bottomSubHeading={'Book You Service'} border={true} />
            <div className='mb-20'>
                <div className='max-w-md bg-base-100 rounded-md p-6 mb-4 mx-auto space-y-2'>
                    <h3 className='card-title'>Service: {title}</h3>
                    <p className='font-semibold text-success'>Price: ${price}</p>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-1 md:grid-cols-2 gap-4 bg-base-100 rounded-md">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input {...register("first_name")} type="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input {...register("last_name")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Email</span>
                        </label>
                        <input {...register("contact_email")} type="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input {...register("contact_number")} type="tel" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Taking Date</span>
                        </label>
                        <input {...register("service_taking_date")} type="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea {...register('message')} className='textarea textarea-bordered' required></textarea>
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                        <button type='submit' className="btn btn-primary">Checkout</button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default CheckoutPage;