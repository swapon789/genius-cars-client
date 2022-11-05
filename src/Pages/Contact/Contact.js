import React from 'react';
import { FaCalendarAlt, FaClock, FaCommentDots,   FaMapMarkerAlt,   } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className='bg-black mb-12 pb-14 pt-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            <div className='flex mx-28'>
                <div className=' pt-7 relative'>
                    <FaCalendarAlt className='text-white w-6 h-6'></FaCalendarAlt>
                    <FaClock className='text-orange-600 w-8 top-10 absolute '></FaClock>
                </div>
                <div className='mt-5 mx-3'>
                    <p className='text-xs text-white'>We are open monday-friday</p>
                    <h2 className='text-white'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex mx-28 '>
                <div className=' pt-7 relative'>
                    <IoCallOutline className='text-white w-6 h-6'></IoCallOutline>      
                    <FaCommentDots className='text-orange-600 w-8 top-7 left-1 absolute '></FaCommentDots>
                </div>
                <div className='mt-5 mx-3'>
                    <p className='text-xs text-white'>Have a question?</p>
                    <h2 className='text-white'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex mx-28 '>
                <div className='pt-7 relative'>
                    <FaMapMarkerAlt className='text-orange-600 w-6 h-6'></FaMapMarkerAlt>
                    
                    
                </div>
                <div className='mt-5 mx-3'>
                    <p className='text-xs text-white'>Need a repair? our address</p>
                    <h2 className='text-white'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;