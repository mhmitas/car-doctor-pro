import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, description, img, price, } = service

    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-md">
            <figure><Image src={img} alt={title} width={500} height={500} /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className='pb-2'>{description.slice(0, 50)}...</p>
                    <p className='pb-2 font-semibold text-secondary'>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end mt-auto">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;