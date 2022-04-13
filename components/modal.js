import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from "react-dom";


const Modal = ({ show, onClose, children, title }) => {

  console.log("showModalComp", show);

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose(false);
  };


  const modalContent = show ? (<>
    <div id="overlay" className=" absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div id="styledmodal" className="bg-white w-[500px] h-[500px] rounded-3xl p-4">
        <h2 className="">Title</h2>
        <div className="">
          <p>Lorem ipsum</p>
          </div>
        <button onClick={handleCloseClick} className="text-black" type="button">close</button>
      </div>
    </div>
  </>) : null;

  // const modalContent = show ? (<>
  //   <div id="modal-example" uk-modal>
  //     <div class="uk-modal-dialog uk-modal-body">
  //       <h2 class="uk-modal-title">Headline</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //       <p class="uk-text-right">
  //         <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
  //         <button class="uk-button uk-button-primary" type="button">Save</button>
  //       </p>
  //     </div>
  //   </div>
  // </>) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent
      ,
      document.getElementById("myportal")
    );
  } else {
    return null;
  }
}

export default Modal
