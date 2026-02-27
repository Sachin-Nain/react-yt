import React from "react";
import { useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
        <button className="count-button" onClick={handleClick}>Count: {count}</button>
    </>
  );
}
