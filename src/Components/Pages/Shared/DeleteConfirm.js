import React from 'react';
import dltIcon from '../../../Image/dltIcon.png'

const DeleteConfirm = ({ setDeleteModal, setDeleteConfirm }) => {
  //
  const deleteConfirm = () => {
    setDeleteConfirm(true);
    setDeleteModal(false);
  };

  const deleteCancel = () => {
    setDeleteConfirm(false);
    setDeleteModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="DeleteConfirmPopUp" className="modal-toggle" />

      <div className="modal ">
        <div className="modal-box p-14 relative text-center">
          <div className="w-24 mb-8 mx-auto">
            <img src={dltIcon} alt="" className="  w-20" />
          </div>
          <h3 className="text-xl font-bold">Are You Sure Remove this items?</h3>
          <h3 className="text-[16px] my-2 font-semibold">
            If you remove this items can't recover It.
          </h3>

          <div className=" flex justify-around mt-10">
            <button
              onClick={deleteCancel}
              className="btn bg-gray-500 hover:bg-gray-500 normal-case px-8  "
            >
              Cancel
            </button>
            <button
              onClick={deleteConfirm}
              className="btn btn-error normal-case px-5 "
            >
              Yes, Remove it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;