import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='max-w-screen-2xl mx-auto flex flex-col justify-between min-h-screen'>
            <div>
                <Navbar />
                <>
                    {children}
                </>
            </div>
            <Footer />
        </div>
    );
};

export default layout;