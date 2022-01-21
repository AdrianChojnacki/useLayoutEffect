import React, { useEffect, useLayoutEffect } from "react";

const Triangle = () => {
  const positionTriangle = () => {
    const element = document.querySelector('.triangle');

    element.style.top = '50%';
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, -50%) rotate(90deg)';
  }

  // useEffect(() => positionTriangle(), []);

  useLayoutEffect(() => positionTriangle(), []);

  return <div className="triangle"></div>
};

export default Triangle;