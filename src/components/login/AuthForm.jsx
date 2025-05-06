import React, { useState } from "react";
import LoginForm from "../../pages/Login/LoginForm";
import RegisterForm from "../../pages/Login/RegisterForm";
import TogglePanel from "../../pages/Login/TogglePanel";

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className={`relative w-full max-w-[850px] h-[550px] bg-white rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden ${isActive ? "active" : ""}`}>
        <LoginForm />
        <RegisterForm isActive={isActive} />
        <TogglePanel isActive={isActive} onToggle={toggleForm} />
      </div>
    </div>
  );
};

export default AuthForm;
