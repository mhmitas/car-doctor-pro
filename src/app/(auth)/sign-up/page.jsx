'use client'

import Container from "@/components/common/Container";
import ProviderSignIn from "@/components/provider-signin/ProviderSignIn";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const SignUpPage = () => {
    const router = useRouter()
    const [processing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        setProcessing(true)
        try {
            const res = await axios.post('/sign-up/api', data)
            console.log(res?.data);
            toast.success('Sign up success')
            setProcessing(false)
            reset()
            router.push('/')
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.message)
            console.log(err);
            setProcessing(false)
        }
    }

    return (
        <Container>
            <div className='my-12'>
                <h3 className='text-2xl sm:text-2xl font-semibold text-center mb-10'>
                    <Link href={'/'} className="py-2 px-4 rounded-md font-semibold bg-gradient-to-r from-blue-600 to-rose-600 border-none hover:from-blue-500 hover:to-rose-500 text-white">Car Doctors Pro</Link>
                </h3>
                <div className='max-w-md mx-auto bg-base-100 p-4 sm:p-6 md:p-8 rounded-md shadow-lg '>
                    <h3 className='text-2xl text-center font-semibold pb-4'>Create a new account</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                        {/* {errorMessage && <AuthenticationErrMessage />} */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register('name')} type="text" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Your Role</span>
                            </label>
                            <select {...register('role')} className="select select-bordered" required defaultValue={'user'}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="form-control pt-3">
                            <button disabled={processing} className='btn btn-primary'>
                                <span className='text-lg font-semibold'>
                                    {processing ?
                                        <span className='loading loading-spinner text-primary'></span> :
                                        'Sign Up'
                                    }
                                </span>
                            </button>
                        </div>
                        <p className='pt-2'>Already have an account? Please <Link href={'/sign-in'} className='link link-primary'>Sign in</Link></p>
                        <div className='divider py-6'>Or</div>
                        <ProviderSignIn processing={processing} setProcessing={setProcessing} />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default SignUpPage;