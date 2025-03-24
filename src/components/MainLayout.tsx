"use client";
import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useOpenModal } from "@/providers/OpenModalContext";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openModal } = useOpenModal();
  return (
    <main
      className={`flex flex-col h-full w-full isolate ${
        openModal !== null ? "fixed" : ""
      }`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
