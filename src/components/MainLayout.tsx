"use client";
import { FC, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useOpenModal } from "@/providers/OpenModalContext";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        handleOpenModal("Full Search");
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
  const { openModal, handleOpenModal } = useOpenModal();
  return (
    <main
      className={`flex flex-col h-full w-full isolate 
        ${openModal !== null ? "fixed" : ""} 
      `}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
