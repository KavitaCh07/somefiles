import './logo.css';
import logo from '../../assets/images/logo.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo_white from "../../assets/images/logo_white.png";

const Logo = () => {
  const [selected, setSelected] = useState("login");

  return (
    <div>
      <div className="rightContainer">
        <div className="imgContainer">
          <img
            src={logo}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="lockText">
          Protect & Manage every <br />
          password in your business
        </div>
      </div>

      <div className="mobileLogo">
        <div className="logoDesign">
          <img
            src={logo_white}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="tabs">
          <div className={selected === "login" ? "underline" : ""}>
            <Link to="/" className="mobileSignIn">
              sign In
            </Link>
          </div>
          <div
            className={selected === "signUp" ? "underline" : ""}
            onClick={() => {
              setSelected("signUp");
            }}
          >
            <Link to="/signup" className="mobileSignIn">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logo;