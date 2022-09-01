import React from "react";

/**
 * Render Box and Remove button
 *
 * Props: id, backgroundColor, width, height, remove
 *
 */
function Box({ id, backgroundColor, width, height, remove }) {
  function removeBox() {
    remove(id);
  }

  return (
    <li>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={removeBox}>Remove Box</button>
    </li>
  );
}

export default Box;
