// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from '../../../firebase.init';
// import Loading from '../Shared/Loading';
// import DeleteConfirm from '../Shared/DeleteConfirm';

const MyItem = () => {
//   const [user, ULoading] = useAuthState(auth);

//   const [deleteModal, setDeleteModal] = useState(false);
//   const [deleteConfirm, setDeleteConfirm] = useState(false);
//   const [deleteId, setDeleteId] = useState();
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const {
//     data: myItem,
//     isLoading,
//     refetch,
//   } = useQuery("item", () =>
//     fetch(
//       `http://localhost:5000/userItem/${user.email}`
//     ).then((res) => res.json())
//   );

//   if (ULoading || isLoading || loading) {
//     return <Loading></Loading>;
//   }

//   const removeItems = (id) => {
//     setDeleteModal(true);
//     setDeleteId(id);
//   };

//   if (deleteConfirm) {
//     setLoading(true);
//     fetch(`http://localhost:5000/deleteItem/${deleteId}`, {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         if (result.deletedCount === 1) {
//           toast.success("Your items remove Successful!");
//           setDeleteModal(false);
//           setDeleteConfirm(false);
//           setDeleteId("");
//           refetch();
//           setLoading(false);
//           // navigate("/");
//         }
//       });
//   }

//   return (
//     <div className="px-5">
//       {myItem.length > 0 ? (
//         <>
//           <div className=" my-5 heading font-bold text-2xl">
//             <h1>
//               My All <span className=" text-success">Items Here</span>
//             </h1>
//             <p className=" font-semibold text-base my-1">
//               Here my all items that is added by me. 
//             </p>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className=" my-5 font-bold text-2xl">
//             <h1> You have no added items.</h1>
//             <p className=" font-semibold text-base my-1">
//               please add new items
//             </p>

//           </div>
//         </>
//       )}
//       <div className=" border-[0] border-b-0 border-t-0 border-gray-600 mb-10">
//         {myItem.length > 0 && (
//           <>
//             <div className="py-4 mb-2 bg-slate-700 text-white flex items-center">
//               <div className=" mx-5 md:mx-8 font-bold">Serial</div>
//               <div className=" w-full font-semibold grid grid-cols-3 md:grid-cols-6 gap-5 items-center">
//                 <div>Image</div>
//                 <div>Items Name</div>
//                 <div>Price</div>
//                 <div>Stock</div>
//                 <div>delivered</div>
//                 <div>Remove Item</div>
//               </div>
//             </div>
//           </>
//         )}
//         <div className=" grid grid-cols-1">
//           {myItem?.map((itm, index) => (
//             <>
//               <div className=" flex items-center">
//                 <div className="mr-5 md:mr-16 lg:mr-20 ml-8 font-bold">
//                   {index + 1}
//                 </div>
//                 <div className=" grid grid-cols-3 md:grid-cols-6 lg:gap-8 gap-2 items-center w-full">
//                   <div>
//                     <img src={itm.image} className=" w-16" alt="" />
//                   </div>
//                   <div>
//                     <h1 className=" font-bold text-lg"> {itm.itemsName}</h1>
//                   </div>
//                   <div>
//                     <h4 className=" font-bold text-lg">{itm.price}</h4>
//                   </div>
//                   <div>
//                     <h4 className=" font-bold text-lg">{itm.stock}</h4>
//                   </div>
//                   <div>
//                     <h4 className=" font-bold text-lg">{itm.delivery}</h4>
//                   </div>
//                   <div>
//                     <label
//                       onClick={() => removeItems(itm._id)}
//                       htmlFor="DeleteConfirmPopUp"
//                       className="cursor-pointer hover:text-orange-500 btn-sm lg:btn-md"
//                     >
//                       <i className="fa-solid fa-trash-can  text-2xl "></i>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="divider mb-0 pb-0"></div>
//             </>
//           ))}
//         </div>
//         <div>
//           <Link
//             to="/addItem"
//             className="btn bg-orange-500 hover:bg-orange-700 font-bold mt-5 text-xl"
//           >
//             Add Item
//           </Link>
//         </div>
//       </div>
//       {deleteModal && (
//         <DeleteConfirm
//           setDeleteModal={setDeleteModal}
//           setDeleteConfirm={setDeleteConfirm}
//         ></DeleteConfirm>
//       )}
//     </div>
//   );
};

export default MyItem;