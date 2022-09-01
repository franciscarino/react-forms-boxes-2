import React, { useState } from "react";

function Box({ id, backgroundColor, width, height }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width} px`,
          height: `${height} px`,
        }}
      ></div>
    </div>
  );
}
