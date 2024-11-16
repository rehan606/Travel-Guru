import React from 'react';
import BookingForm from './BookingForm';

const Banner = () => {
    return (
        <div>
            <div className="container  flex justify-between  items-center h-screen">
                <div className='w-5/12'>
                    <h2 className='font-bebas text-9xl text-white'>Cox's Bazar</h2>
                    <p className='text-white mt-7'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>

                <div className='bg-white p-10 rounded-xl col-span-4 w-4/12'>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default Banner;