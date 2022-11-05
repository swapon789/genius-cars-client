import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, price , title} = service

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
            <figure><img className='h-60 rounded-2xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Peice: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><FaArrowRight className='m-3 text-orange-600 text-2xl'></FaArrowRight> </Link>            
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;