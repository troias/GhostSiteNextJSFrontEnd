import React, { useEffect, useContext, useState } from 'react'
import ReactDOM from "react-dom";

import ModalContent from './modalContent';
import AuthContext from '../context/authContext';



const Modal = ({  }) => {

  

  const ctx = useContext(AuthContext);
  const [isBrowser, setIsBrowser] = useState(false);

  //  console.log("modalOpen", ctx.modalOpen)
 

  useEffect(() => {
    setIsBrowser(true);
  }, []);




  const modalContent = ctx.modalOpen ? <ModalContent /> : null;

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
