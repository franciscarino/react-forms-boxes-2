import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm.js";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function Boxlist() {
  const [boxes, setBoxes] = useState([]);

  // function renderBoxes() {
  //   return (
  //     <ul>
  //       {boxes.map((box) => (
  //         <li key={box.id}>
  //           {box.backgroundColor}: {box.backgroundColor}
  //           {box.width}: {box.width}
  //           {box.height}: {box.height}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  function addBox(box){
    let newBox = {...box, id:uuid()};
    setBoxes(boxes => [...boxes, newBox])
  }

  function remove(id){
    setBoxes(boxes => boxes.filter(b => b.id !== id))
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <ul>
        {boxes.map(box => (
        <li>
          <Box
            key = {box.id}
            id = {box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            remove = {remove}
          />
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Boxlist;
