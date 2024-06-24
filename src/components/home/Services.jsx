import React from 'react';
import Heading from '../common/Heading';
import ServicesCard from '../cards/ServicesCard';
import Container from '../common/Container';
import { getServices } from '@/services/getServices';

const Services = async () => {

    const services = await getServices()
    // console.log(services);

    return (
        <Container>
            <div>
                <Heading heading="Our Services Area" topSubHeading={'Services'} bottomSubHeading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere excepturi minima quidem quas. Architecto, autem. Eius atque modi aut!`} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services?.map(service => <ServicesCard service={service} key={service._id} />)}
            </div>
        </Container>
    );
};

export default Services;