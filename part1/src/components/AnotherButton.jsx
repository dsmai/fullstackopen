import React, { useState, useSyncExternalStore } from "react";

const AnotherButton = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  // event handlers
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setClicks({ ...clicks, left: clicks.left + 1 });
    setTotal(clicks.left + clicks.right);
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setClicks({ ...clicks, right: clicks.right + 1 });
    setTotal(clicks.left + clicks.right);
  }

  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>Increment left</button>
      <button onClick={handleRightClick}>Increment right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </>
  );
};

export default AnotherButton;
