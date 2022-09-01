import React from "react";


function Box({key, id, backgroundColor, width, height, remove }) {
  function removeBox(){
    remove(id)
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={removeBox}>Remove Box</button>
    </div>
  );
}

export default Box;