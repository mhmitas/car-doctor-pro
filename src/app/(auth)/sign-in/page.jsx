'use client'
import Container from '@/components/common/Container';
import ProviderSignIn from '@/components/provider-signin/ProviderSignIn';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const SignInPage = () => {
    const [processing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        setProcessing(true)
    }

    return (
        <Container>
            <div className='my-12'>
                <h3 className='text-2xl sm:text-2xl font-semibold text-center mb-10'>
                    <Link href={'/'} className="py-2 px-4 rounded-md font-semibold bg-gradient-to-r from-blue-600 to-rose-600 border-none hover:from-blue-500 hover:to-rose-500 text-white">Car Doctors Pro</Link>
                </h3>
                <div className='max-w-md mx-auto bg-base-100 p-4 sm:p-6 md:p-8 rounded-md shadow-lg '>
                    <h3 className='text-2xl text-center font-semibold pb-4'>Log in to Car Doctors Pro</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                        {/* {errorMessage && <AuthenticationErrMessage />} */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email')} type="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password')} type="text" placeholder="******" className="input input-bordered" required />
                        </div>
                        <div className="form-control pt-3">
                            <button disabled={processing} className='btn btn-primary'>
                                <span className='text-lg font-semibold'>
                                    {processing ?
                                        <span className='loading loading-spinner text-primary'></span> :
                                        'Sign In'
                                    }
                                </span>
                            </button>
                        </div>
                        <p className='pt-2'>Don't have an account? Please <Link href={'/sign-up'} className='link link-primary'>Sign up</Link></p>
                        <div className='divider py-6'>Or continue with</div>
                        <ProviderSignIn processing={processing} />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default SignInPage;

// shadow-blue-500/15 hover:shadow-blue-500/25 duration-300 transition