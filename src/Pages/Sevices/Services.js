import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className='text-5xl font-semibold'>Our Services</h2>
                <p className='my-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className=' my-14 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='mb-20 text-center'>
                <button className="btn btn-outline btn-warning">More Service</button>
            </div>
        </div>
    );
};

export default Services;