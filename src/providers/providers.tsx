"use client";

import { OpenMondalProvider } from "./OpenModalContext";
import MainLayout from "@/components/MainLayout";
import { ProgressProvider } from "@bprogress/next/app";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OpenMondalProvider>
      <MainLayout>
        <ProgressProvider
          height="4px"
          color="#155dfc"
          options={{ showSpinner: false }}
        >
          {children}
        </ProgressProvider>
      </MainLayout>
    </OpenMondalProvider>
  );
}
