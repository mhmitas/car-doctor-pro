import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const ProviderSignIn = ({ processing }) => {
    return (
        <div className='flex flex-col gap-2'>
            <button onClick={() => handleSignIn(googleProvider)} disabled={processing} type='button' className='btn'>
                <FaGoogle size={26} />Google
            </button>
            <button disabled={processing} type='button' className='btn'>
                <FaFacebook size={26} />Facebook
            </button>
        </div>
    );
};

export default ProviderSignIn;