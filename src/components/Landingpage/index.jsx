import React from "react";
import "./style.css";
import Btn from "../common/Button";
import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";
function Landingpage() {
  return (
    <div className="landingpage">
      <ul className="container">
        <div className="discription">
          <motion.h1
            className="strock"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "smooth", type: "smooth" }}
          >
            track crypto
          </motion.h1>
          <br />
          <motion.h1
            style={{ color: "var(--blue)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0.5,
              type: "smooth",
            }}
          >
            {" "}
            real time.
          </motion.h1>
          <motion.p
            style={{ color: "var(--grey)", marginTop: "20px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              type: "smooth",
              delay: 0.75,
            }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </motion.p>
          <ul className="btn-group">
            <Btn type={"contained"} name={"dashboard"} />
          </ul>
        </div>
        <div className="img-box">
          <img src={gradient} alt="" className="gredieant" />
          <motion.img
            src={iphone}
            initial={{ y: -13 }}
            animate={{ y: 13 }}
            transition={{
              duration: 2.5,
              repeatType: "mirror",
              type: "smooth",
              repeat: Infinity,
            }}
            alt=""
            className="iphone"
          />
        </div>
      </ul>
    </div>
  );
}

export default Landingpage;
