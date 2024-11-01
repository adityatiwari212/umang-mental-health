import React from 'react'
import "./Modal.css"
function Modal({childeren , setOpen}) {
  return (
    <>
    <div className="modal-wrapper" onClick={()=>{setOpen(false)}}>

    </div>
    <div className="modal-content">
        {childeren}
    </div>
    </>
  )
}

export default Modal