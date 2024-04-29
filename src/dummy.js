import React, { useRef, useState, useEffect } from "react";

const YourComponent = () => {
  const divRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const scrollDiv = divRef.current;

    console.log(
      "hear ->",
      scrollDiv.scrollLeft,
      scrollDiv.scrollWidth,
      scrollDiv.clientWidth
    );
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollDiv;

      // Check if there's more content to scroll left
      setShowLeftButton(scrollLeft > 0);

      // Check if there's more content to scroll right
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    };

    scrollDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (scrollOffset) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div
      className="a"
    >
      {showLeftButton && (
        <button onClick={() => handleScroll(-100)}>Scroll Left</button>
      )}
      <div className="b" ref={divRef}>
       
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>
        <div className="c">1</div>

      
      </div>
      {showRightButton && (
        <button onClick={() => handleScroll(100)}>Scroll Right</button>
      )}
    </div>
  );
};

export default YourComponent;
