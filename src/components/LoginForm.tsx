'use client'
import { ModalType } from "@/providers/OpenModalContext";
import Link from "next/link";
import { FC, SetStateAction, useEffect } from "react";

type LoginFormPropType = {
  setModalTitle: React.Dispatch<SetStateAction<string | null>>
  handleOpenModal: (modal: ModalType) => void;
};

const LoginForm: FC<LoginFormPropType> = ({ setModalTitle, handleOpenModal }) => {
  useEffect(() => {
    setModalTitle('Login');
  }, [])
  return (
    <>
      {/* <h2 className="form-header">Login</h2> */}
      <div className="form-options">
        <button className="google-login">Continue with Google</button>
        <button className="facebook-login">Continue with Facebook</button>
      </div>
      <div className="stepper"></div>
      <form className="login-form form">
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
        <div className="form-info">
          <div className="form-group">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="form-control"
            />
            <label htmlFor="remember-me" className="">
              Remember Me
            </label>
          </div>
          <Link href={"/"} className="text-blue-500 underline">
            Forget Password?
          </Link>
        </div>
        <div className="form-actions">
          <button type="button">Login</button>
        </div>
        <div className="form-redirect">
          <p className="info-text text-center">
            Not registered yet?&nbsp;
            <button
              type="button"
              className="text-blue-500 underline cursor-pointer"
              onClick={() => handleOpenModal("Register")}
            >
              {" "}
              Create your account
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
