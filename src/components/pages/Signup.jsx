import React from "react";
import Illustration from "../Illustration.jsx";
import SignupForm from "../SignupForm.jsx";

function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;
