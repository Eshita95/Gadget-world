import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Items from './Items';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;