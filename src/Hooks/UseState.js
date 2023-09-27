import React, { useState } from "react";
import '../Hooks/Style.css'

const UseState = () => {
   const initialdata=0;
  const [myNum,setMyNum]=useState(initialdata);
console.log('hhh',myNum)
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={()=>(myNum<10? setMyNum(myNum+1):setMyNum(10))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={()=> (myNum > 0 ? setMyNum(myNum-1):setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;