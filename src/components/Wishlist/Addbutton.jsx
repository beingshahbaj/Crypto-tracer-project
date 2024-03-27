import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Addbutton({ coin }) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const storedcoinstring = localStorage.getItem("Coins");
    const storedcoin = storedcoinstring ? JSON.parse(storedcoinstring) : [];

    setFlag(storedcoin.includes(coin.id));
  }, [coin.id]);

  const Addcoin = (e) => {
    e.stopPropagation();
    const storedcoinstring = localStorage.getItem("Coins");
    const storedcoin = storedcoinstring ? JSON.parse(storedcoinstring) : [];
    if (!storedcoin.includes(coin.id)) {
      storedcoin.push(coin.id);
      localStorage.setItem("Coins", JSON.stringify(storedcoin));
      toast.success(
        <CustomToast
          message={`${coin.name} Added to Wishlist`}
          icon1={coin.image.small}
          icon2={coin.image}
        />
      );
      setFlag(!flag);
    } else {
      if (window.confirm("Remove coin from wishlist?")) {
        const index = storedcoin.indexOf(coin.id);
        storedcoin.splice(index, 1);
        localStorage.setItem("Coins", JSON.stringify(storedcoin));
        toast.warning(
          <CustomToast
            message={`${coin.name} removed from wishlist`}
            icon1={coin.image.small}
            icon2={coin.image}
          />
        );
        setFlag(!flag);
      } else {
        toast.error(
          <CustomToast
            message={`${coin.name}  can not removed from wishlist`}
            icon1={coin.image.small}
            icon2={coin.image}
          />
        );
      }
    }
  };

  return (
    <div className="">
      <button onClick={Addcoin} className="add-btn">
        {flag ? <StarIcon /> : <StarBorderIcon />}
      </button>
    </div>
  );
}

export default Addbutton;

const CustomToast = ({ message, icon1, icon2 }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={icon1}
      alt="icon"
      onError={(e) => (e.target.src = icon2)}
      style={{ marginRight: "10px", width: "30px", height: "30px" }}
    />
    <span style={{ color: "var()--blue" }}>{message}</span>
  </div>
);
