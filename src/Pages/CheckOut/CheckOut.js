import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert("Phone number Should be 10 characters or longer")
        // }
        // else()
     console.log(order)
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers: {
                'content-type': 'application/json',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('geniustoken')}`
                }

            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed succesfully')
                form.reset();
            }
        })
        .catch(err => console.err(err))
    }
    return (
        <div className='pb-10'>
            <div data-theme="aqua" className="grid max-w-screen-xl  grid-cols-1 gap-8  px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">{title}</h2>
                        <div className="dark:text-gray-400">{price}</div>
                    </div>
                    <img src={img} alt="" className="p-6 w-96 r  h-72 md:h-64" />
                </div>
                <form onSubmit={handlePlaceOrder} novalidate="" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">First Name</label>
                        <input id="name" type="text" placeholder="Enter Your First name" name='firstName' className="w-full p-3 input-bordered text-black rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="name" className="text-sm">Last Name</label>
                        <input id="name" type="text" placeholder="Enter Your last name" name='lastName' className="w-full p-3 input-bordered text-black  rounded dark:bg-gray-800" />
                    </div>

                    <div>
                        <label for="name" className="text-sm">Your Phone</label>
                        <input id="name" type="text" placeholder="Enter your Phone No" name='phone' className="w-full p-3 text-black   input-bordered rounded dark:bg-gray-800" required />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" name='email' defaultValue={user?.email} placeholder='Enter your email' className="w-full p-3 input-bordered rounded dark:bg-gray-800" required />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded text-black dark:bg-gray-800" required></textarea>
                    </div>
                    <div className='mt-10 mx-5'>
                        <button type="submit" name='message' className="w-52 p-3  bg-red-700 h-14 top-4 text-sm font-bold tracking-wide  uppercase input-bordered rounded dark:bg-violet-400 dark:text-gray-900">Place Your Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;