import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity ,supplier} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='pb-10 border-radius-10'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {supplier}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn bg-orange-500 hover:bg-orange-700'>Update: {name}</button>
        </div>
    );
};

export default Item;