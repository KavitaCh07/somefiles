import './form.css';
import eye_on from '../../assets/icons/eye_on.png';
import { useState } from 'react';
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Form = () => {

    const [pin, setPin] = useState<Boolean>(false);
    const navigate = useNavigate();
    const togglePin = () => {
      setPin(!pin);
    };
  
    const submitHandler = (e: any) => {
      e.preventDefault();
  
      const mobile = e.target.mobile.value;
      const mPin = e.target.mPin.value;
  
      const newArr: any[] = [];
      const userData = JSON.parse(localStorage.getItem("users") || "[]");
      userData.map((user: any) => {
        // if (mobile === user.mobile) {
  
        //   if (mPin === user.mPin) {
        //     navigate("/dashBoard");
        //   }
  
        //  }else{
        //   alert("enter proper values...")
        //  }
  
        if (mobile === user.mobile && mPin === user.mPin) {
          newArr.push("exists");
        }
      });
      if (newArr.includes("exists")) {
        localStorage.setItem("currentUser", JSON.stringify([mobile]));
        navigate("/dashboard");
      } else {
        alert("please signUp to Login or check your Mobile Number & Password..."); 
      }
    };
    return (
      <div>
        {" "}
        <div className="leftContainer">
          <div className="signInText">SIGN IN TO YOUR ACCOUNT</div>
          <form className="formContainer" onSubmit={submitHandler}>
            <div className="">
              <input
                type="text"
                placeholder="MobileNo"
                className="inputField"
                required
                minLength={10}
                maxLength={10}
                name="mobile"
              />
            </div>
            <div className="passwordPin">
              <input
                type={pin ? "text" : "password"}
                placeholder="MPin"
                className="inputField"
                required
                minLength={4}
                maxLength={4}
                name="mPin"
              />
              <img
                src={eye_on}
                alt="img"
                className="eyeIcon"
                onClick={togglePin}
              />
            </div>
            <div className="forgotPassword">Forgot your password?</div>
            <button className="signInButton">SIGN IN</button>
            <div className="createAccount">
              Don’t have a Account?{" "}
              <span>
                &nbsp;
                <Link to="/signup" className="linkButton">
                  SIGNUP
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );

}
export default Form;