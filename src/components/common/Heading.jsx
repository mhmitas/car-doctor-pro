import React from 'react';

const Heading = ({ heading, topSubHeading, bottomSubHeading, border }) => {
    return (
        <div className='font-semibold text-center max-w-lg flex flex-col items-center justify-center mx-auto my-8 gap-1'>
            {topSubHeading && <h3 className='text-primary'>{topSubHeading}</h3>}
            {heading && <h1 className='text-3xl'>{heading}</h1>}
            {bottomSubHeading && <h3 className='font-normal text-sm'>{bottomSubHeading}</h3>}
            {border && <div className='border-b w-full p-1 border-base-300'></div>}
        </div>
    );
};

export default Heading;