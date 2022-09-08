import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteConfirm from '../Shared/DeleteConfirm';
import Loading from '../Shared/Loading';

const ManageItem = () => {

    const {
        data: items,
        isLoading,
        refetch,
    } = useQuery("product", () =>
        fetch("http://localhost:5000/item").then((res) =>
            res.json()
        )
    );

    const [loading, setLoading] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const navigate = useNavigate();

    if (loading || isLoading) {
        return <Loading></Loading>;
    }

    const removeItems = (id) => {
        setDeleteModal(true);
        setDeleteId(id);
    };

    if (deleteConfirm) {
        setLoading(true);
        fetch(`http://localhost:5000/deleteItem/${deleteId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.deletedCount === 1) {
                    toast.success("Your Information Update Successful!");
                    setDeleteModal(false);
                    setDeleteConfirm(false);
                    setDeleteId("");
                    refetch();
                    setLoading(false);
                    // navigate("/");
                }
            });
    }

    return (
        <div className="px-5">
            <div className=" my-10 heading font-bold text-4xl">
                <h1>
                    Manage <span className=" text-orange-500">Your Inventories</span>
                </h1>
                <p className=" font-semibold text-base my-1">
                    I can manage here all items, remove or update items.
                </p>
            </div>
            <div className=" border-[0] border-b-0 border-t-0 border-gray-600">
                <div className="py-4 mb-2 bg-orange-500 text-white flex items-center">
                    <div className="mx-8 font-bold">Serial</div>
                    <div className="  w-full font-semibold grid grid-cols-3 md:grid-cols-6 gap-5 items-center">
                        <div>Image</div>
                        <div>Product Name</div>
                        <div>Price</div>
                        <div>Stock</div>
                        {/* <div>delivered</div> */}
                        <div>Remove Product</div>
                    </div>
                </div>
                <div className=" grid grid-cols-1">
                    {items?.map((itm, index) => (
                        <>
                            <div className=" flex items-center">
                                <div className="mx-8 font-bold">{index + 1}</div>
                                <div className=" grid grid-cols-3 md:grid-cols-6 md:gap-8 gap-2 items-center w-full">
                                    <div>
                                        <img src={itm.img} className=" w-16" alt="" />
                                    </div>
                                    <div>
                                        <h1 className=" font-bold text-lg"> {itm.name}</h1>
                                    </div>
                                    <div>
                                        <h4 className=" font-bold text-lg">{itm.price}</h4>
                                    </div>
                                    <div>
                                        <h4 className=" font-bold text-lg">{itm.quantity}</h4>
                                    </div>
                                    {/* <div>
                                        <h4 className=" font-bold text-lg">{itm.delivery}</h4>
                                    </div> */}
                                    <div>
                                        <label
                                            onClick={() => removeItems(itm._id)}
                                            htmlFor="DeleteConfirmPopUp"
                                            className="cursor-pointer hover:text-orange-500 btn-sm lg:btn-md"
                                        >
                                            <i className="fa-solid fa-trash-can  text-2xl "></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="divider mb-0"></div>
                        </>
                    ))}
                </div>
                <div>
                    <Link
                        to="/addItem"
                        className="btn bg-orange-500 hover:bg-orange-700 font-bold my-5 text-xl"
                    >
                        <i className="mr-2 "></i> Add New Item
                    </Link>
                </div>
            </div>

            {deleteModal && (
                <DeleteConfirm
                    setDeleteModal={setDeleteModal}
                    setDeleteConfirm={setDeleteConfirm}
                ></DeleteConfirm>
            )}
        </div>
    );
};

export default ManageItem;