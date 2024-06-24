import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, description, img, price, _id } = service

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
                    <Link href={`/services/${_id}`} ><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;