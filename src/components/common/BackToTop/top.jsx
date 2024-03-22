import React, { useState, useEffect, useRef } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./style.css";

function Top() {
  const [isVisible, setIsVisible] = useState(false);
  const myButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="topButton" ref={myButtonRef} onClick={topFunction}>
          <ArrowUpwardIcon />
        </div>
      )}
    </>
  );
}

export default Top;
