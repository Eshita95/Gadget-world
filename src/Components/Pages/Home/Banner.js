import React from 'react';
import banner from '../../../Image/banner.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage:`url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">GADGET WORLD</h1>
                    <p className="mb-5">Provident cupidi tate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-500 hover:bg-orange-700">Explore Gadgets</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;