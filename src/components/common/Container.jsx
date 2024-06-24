import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='px-6 my-8'>
            {children}
        </div>
    );
};

export default Container;