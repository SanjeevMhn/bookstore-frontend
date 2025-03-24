"use client";
import { createContext, useContext, useRef, useState } from "react";

type ModalType = "Login" | "Register" | "Full Search" | null;

type OpenModalContextType = {
  openModal: ModalType;
  handleOpenModal: (modal: ModalType) => void;
};

export const OpenModalContext = createContext<OpenModalContextType | null>(
  null
);

export const useOpenModal = () => {
  const context = useContext(OpenModalContext);
  if (!context) {
    throw new Error("useOpenModal must be used within a OpenModalProvider");
  }

  return context;
};

export const OpenMondalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const dialog = useRef<HTMLDialogElement>(null);
  const handleOpenModal = (modal: ModalType) => {
    setOpenModal(modal);
    if (dialog.current && modal !== null) {
      dialog.current.showModal();
    } else {
      dialog.current?.close();
    }
  };

  const openModalContextValue: OpenModalContextType = {
    openModal,
    handleOpenModal,
  };

  return (
    <OpenModalContext.Provider value={openModalContextValue}>
      {children}

      <dialog ref={dialog} onClose={() => handleOpenModal(null)}>
        <div className="form-container">
          {openModal == "Login" ? (
            <>
              <h2 className="form-header">Login</h2>
              <div className="third-party-login">
                <button className="google-login">Continue with Google</button>
                <button className="facebook-login">
                  Continue with Facebook
                </button>
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

                <div className="form-actions">
                    <button type="button">Login</button>
                </div>
        
              </form>
            </>
          ) : null}
        </div>
      </dialog>
    </OpenModalContext.Provider>
  );
};
