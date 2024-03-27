import React, { useEffect, useState } from "react";
import "./style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Facebook,
  GitHub,
  Instagram,
  Launch,
  Link,
  LinkOff,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="flexr">
        <div className="flexc name">
          <h1>SHAHBAJ KHAN</h1>
          <p>we create possibillitise</p>
          <p>for the connected world</p>
          <h3 className="contect">CONTECT</h3>
          <p>shahbaj9129@gmail.com</p>
          <p>9129337160</p>
        </div>
        <div className="flexc options">
          <h3>about</h3>
        </div>
        <div className="flexc project">
          <h3>project</h3>
          <a href="#">
            YouTube clone <Launch />
          </a>
          <a href="#">
            Amazon clone <Launch />
          </a>
          <a href="#">
            Rugs website <Launch />
          </a>
          <a href="#">
            spotify clone <Launch />
          </a>
          <a href="#">
            Nasha Image <Launch />
          </a>
          <a href="#">
            Wether App <Launch />
          </a>
          <a href="#"></a>
        </div>
        <div className="flexc">
          <h3>My portfolio</h3>
          <a href="#">
            shahbaj khan.com <Launch />
          </a>
        </div>
        <div className="flexc">
          <ul className="flexc">
            <h2>social media</h2>
            <div className="flex">
              <a href="#">
                <GitHub />
              </a>
              <a href="#">
                <LinkedIn />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
            </div>
          </ul>
          <h4>time {time}</h4>
        </div>
      </div>
      <hr />
      <h4 className="copyright">
        Made with ❤️ by shahbaj khan | All rights reserved.{" "}
        {new Date().getFullYear()}
      </h4>
    </footer>
  );
};

export default Footer;
