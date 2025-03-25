"use client";
import { ModalType } from "@/providers/OpenModalContext";
import { FC, useState } from "react";
type RegisterFormPropType = {
  handleOpenModal: (modal: ModalType) => void;
};
const RegisterForm: FC<RegisterFormPropType> = ({ handleOpenModal }) => {
  const [signupWithEmail, setSignupWithEmail] = useState<boolean>(false);
  return (
    <>
      {!signupWithEmail ? (
        <>
          <h2 className="form-header">Create Account</h2>
          <div className="form-redirect">
            Already have an account?&nbsp;
            <button
              type="button"
              className="text-blue-500 underline cursor-pointer"
              onClick={() => handleOpenModal("Login")}
            >
              Login
            </button>
          </div>
          <div className="form-options">
            <button className="google-register">Signup with Google</button>
            <button className="facebook-register">Signup with Facebook</button>
            <button
              className="mail-register"
              onClick={() => setSignupWithEmail(true)}
            >
              Signup with Email
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="form-header">Register With Email</h2>
          <form className="register-form form">
            <div className="form-group">
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="form-control"
                placeholder="Full Name"
              />
              <label htmlFor="full-name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
              />
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"
              />
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
            </div>

            <div className="form-actions">
              <button type="button">Register</button>
            </div>
            <div className="form-footer">
                <button type="button" className="text-blue-500 cursor-pointer flex w-full justify-center" onClick={() => setSignupWithEmail(false)}>Register with social accounts</button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default RegisterForm;
