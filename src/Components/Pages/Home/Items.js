import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

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
                <h3 className='text-orange-500  text-3xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>FIND THE GADGET YOU START WITH</h2>
            </div>
            <div className=' px-5 lg:px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>

            <Link to="/manageItem">
          <button className="text-white bg-orange-500 hover:bg-orange-700  rounded font-semibold my-5  py-2 px-8">
            Manage Inventory <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
        </div>
    );
}

export default Items;