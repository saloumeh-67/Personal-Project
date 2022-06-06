import React from "react";
     const letters = [
       "A",
       "B",
       "C",
       "D",
       "E",
       "F",
       "G",
       "H",
       "I",
       "J",
       "K",
       "L",
       "M",
       "N",
       "O",
       "P",
       "Q",
       "R",
       "S",
       "T",
       "U",
       "V",
       "W",
       "X",
       "Y",
       "Z",
     ];
 const GetRandomColor=()=>{
 const rgb = [
   Math.floor(Math.random() * 255),
   Math.floor(Math.random() * 255),
   Math.floor(Math.random() * 255),
 ];
   
    

return (
      <div>
     <p>hello my new colored text<span style={{color: GetRandomColor()}}>{letters}</span></p> 
      </div>
  );
};
 export default GetRandomColor;