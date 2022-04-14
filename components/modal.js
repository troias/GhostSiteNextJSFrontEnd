import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from "react-dom";

import ModalContent from './modalContent';



const Modal = ({ show, onClose, children, title }) => {

  console.log("showModalComp", show);

  const [isBrowser, setIsBrowser] = useState(false);


 

  useEffect(() => {
    setIsBrowser(true);
  }, []);




  const modalContent = show ? <ModalContent onClose={onClose}/> : null;

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
