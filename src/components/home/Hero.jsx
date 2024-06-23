import React from 'react';

const Hero = () => {
    return (
        <header>
            <div className='w-full h-[550px]'>
                <div className="flex flex-col justify-center items-center w-full h-full shadow-lg dark:shadow-primary/5 bg-base-100 border-base-300 border">
                    <h1 className="text-5xl font-bold mb-4 text-center">
                        Welcome to Our Website
                    </h1>
                    <p className="text-xl mb-8 text-center">
                        We provide the best solutions for your cars.
                    </p>
                    <div className='flex gap-2'>
                        <button className='btn btn-primary'>Contact Us</button>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;