"use client"
import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import ServicesCard from '../cards/ServicesCard';
import Container from '../common/Container';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <Container>
            <div>
                <Heading heading="Our Services Area" topSubHeading={'Services'} bottomSubHeading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere excepturi minima quidem quas. Architecto, autem. Eius atque modi aut!`} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.map(service => <ServicesCard service={service} key={service._id} />)}
            </div>
        </Container>
    );
};

export default Services;