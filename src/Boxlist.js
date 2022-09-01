import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm.js";
import Box from "./Box";

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

  return (
    <div>
      <NewBoxForm />

      <Box width={width} height={height} backgroundColor={backgroundColor} />
    </div>
  );
}

export default Boxlist;
