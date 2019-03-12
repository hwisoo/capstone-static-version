import React from "react";
import google from "../google-brands.svg";

export default function Login() {
  return (
    <div>
      <button className="btn-dark btn-lg google">
        Login with Google{" "}
        <img className="googleLogo" src={google} alt="google" />
      </button>
    </div>
  );
}
