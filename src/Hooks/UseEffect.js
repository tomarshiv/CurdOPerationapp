import React, { useEffect, useState } from "react";
import '../Hooks/Style.css'

const UseEffect = () => {
   const initialdata=0;
  const [myNum,setMyNum]=useState(initialdata);
// console.log('hhh',myNum)


useEffect(()=>{
    console.log('hi')
    document.title =`chats(${myNum})`
},[myNum])



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
      
      </div>
    </>
  );
};

export default UseEffect;