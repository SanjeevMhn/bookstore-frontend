"use client";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import { createContext, useContext, useRef, useState } from "react";

export type ModalType = "Login" | "Register" | "Full Search" | null;

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
        <button
          type="button"
          className="cursor-pointer inline-flex ml-auto"
          onClick={() => handleOpenModal(null)}
        >
          <span className="icon-container" style={{ "--size": "2rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </span>
        </button>
        <div className="form-container">
          {openModal == "Login" ? (
            <LoginForm handleOpenModal={handleOpenModal} />
          ) : openModal == "Register" ? (
            <RegisterForm handleOpenModal={handleOpenModal} />
          ) : null}
        </div>
      </dialog>
    </OpenModalContext.Provider>
  );
};
