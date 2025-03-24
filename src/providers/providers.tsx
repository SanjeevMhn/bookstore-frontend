"use client";

import Navbar from "@/components/Navbar";
import { OpenMondalProvider } from "./OpenModalContext";
import Footer from "@/components/Footer";
import MainLayout from "@/components/MainLayout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OpenMondalProvider>
        <MainLayout>
            {children}
        </MainLayout>
    </OpenMondalProvider>
  );
}
