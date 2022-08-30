import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div className='px-10'>
            <div className='text-center my-8'>
                <h3 className='text-orange-500  text-3xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>FIND THE GADGET YOU START WITH</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
}

export default Items;