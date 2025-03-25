import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Actions() {
  
  const inputElement=useRef();

   const dispatch=useDispatch()

   const handleIncrement=()=>{
       dispatch({type:"INCREMENT"})

   }
   const handleDecrement=()=>{
      dispatch({type:"DECREMENT"})

   }
   const handleAdd=()=>{
dispatch({type:"ADD",payload:{value:inputElement.current.value}})
inputElement.current.value=""
   }
   const handleSubtract=()=>{
    dispatch({type:"SUBTRACT",payload:{value:inputElement.current.value}})
    inputElement.current.value=""
   }
   const handlePrivacyToggle=()=>{
    dispatch({type:"PRIVACY_TOGGLE"})
   }

  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center buttons">
      <button type="button" onClick={handleIncrement}  className="btn btn-primary btn-lg px-4 gap-3">
        Increment
      </button>
      <button type="button" onClick={handleDecrement} className="btn btn-danger btn-lg px-4">
        Decrement
      </button>
      <button type="button" onClick={handlePrivacyToggle} className="btn btn-secondary btn-lg px-4">
        Privacy Toggle
      </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center buttons">
      <input type="text"  
      ref={inputElement}
      className="number-input"  placeholder="Enter Number"/>
      
      <button type="button" onClick={handleAdd} className="btn btn-warning btn-lg px-4">
        ADD
      </button>
      <button type="button" onClick={handleSubtract} className="btn btn-success btn-lg px-4">
        SUBTRACT
      </button>
    </div>
    </>
  );
}

export default Actions;
