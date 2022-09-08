import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import CustomerReview from './CustomerReview';
import Items from './Items';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;