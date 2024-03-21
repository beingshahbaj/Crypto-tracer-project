import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./style.css"

function Top() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardIcon />
    </div>
  );
}

export default Top;
