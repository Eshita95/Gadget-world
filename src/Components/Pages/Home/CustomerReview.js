import React from 'react';
import Review from './Review';
import women from '../../../Image/women.jpg';
import woman from '../../../Image/woman.jpg';
import woman2 from '../../../Image/woman2.jpg';


const CustomerReview = () => {
    const reviews = [
        {
            img: woman ,
            name: "Mst Jenny",
            review:
                " Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people! Smith John Happy Customer",
        },
        {
            img: women,
            name: "Mrs Astha",
            review:
                "Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them! Frank Shila Happy Customer",
        },
        {
            img: woman2,
            name: "Mithila Palkar",
            review:
                "We are interesting template and others are very good. The support has served me immediately. Are to be congratulated. Mr Anderson Happy Customer",
        },
    ];

    // if(loading){
    //   return <Loading></Loading>
    // }

    // window.location.reload(false);

    return (
        <div className='my-20'>
            <div className='my-6'>
                <h1 className='text-3xl text-orange-500 font-bold'>OUR CUSTOMER SAYS</h1>
                <h1 className='text-4xl'>Review from our customers</h1>
            </div>
            <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-5 ">
                {reviews.map((review) => (
                    <Review review={review}></Review>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;