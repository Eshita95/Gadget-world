import React from 'react';

const ContactUs = () => {
    return (
        <div className=" px-10">
            <div className='my-6'>
                <h1 className='text-3xl font-bold text-orange-500'>CONTACT WITH US</h1>
                <h1 className='text-3xl'>For any kind of Information, You can contact with us.</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center my-10">
                <div className=" w-96 shadow-2xl px-7 py-12 rounded-lg">
                    <div className=" text-center my-3 heading font-bold text-3xl ">
                        <h1 className=" uppercase mb-5">
                            Contact <span className=" text-orange-500">Information</span>
                        </h1>
                    </div>
                    <div className=" text-left heading">
                        <ul>
                            <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                                <span className=" text-3xl text-gray-600">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <span className="mx-3">
                                    44 Babor Ali Road, <br /> Uttara, Dhaka.
                                </span>
                            </li>
                            <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                                <span className=" text-2xl text-gray-600">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <span className="mx-3">+088 017-xxxxxxxxx</span>
                            </li>
                            <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                                <span className=" text-2xl text-gray-600">
                                    <i className="fa-solid fa-at"></i>
                                </span>
                                <span className="mx-3">gadget@world.org</span>
                            </li>
                            <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                                <span className=" text-2xl text-gray-600">
                                    <i className="fa-solid fa-clock"></i>
                                </span>
                                <span className="mx-3">
                                    Opening Hours: <br />
                                    Sat-Thus 9:00 am to 9:00 pm
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" w-96 shadow-2xl px-7 py-2 rounded-lg">
                    <div className=" text-center my-3 heading font-bold text-3xl ">
                        <h1 className=" uppercase">
                            Get in <span className=" text-orange-500">Touch</span>
                        </h1>
                    </div>
                    <div>
                        <form>
                            <div>
                                <input
                                    placeholder="Name"
                                    //   {...register("email", { required: true })}
                                    className="input input-bordered my-1 input- focus:outline-none w-full "
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Email"
                                    //   {...register("email", { required: true })}
                                    className="input input-bordered my-1 input- focus:outline-none w-full "
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Phone"
                                    //   {...register("email", { required: true })}
                                    className="input input-bordered my-1 input- focus:outline-none w-full "
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    //   {...register("email", { required: true })}
                                    className="input input-bordered my-1  h-16 focus:outline-none w-full "
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className=" w-32">
                                <button className=" btn bg-orange-500 hover:bg-orange-500 w-full">
                                    Send <i className="fa-solid fa-paper-plane ml-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;