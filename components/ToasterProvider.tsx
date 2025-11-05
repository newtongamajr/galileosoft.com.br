"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          duration: 5000,
          iconTheme: {
            primary: '#79F725',
            secondary: '#fff',
          },
        },
        error: {
          duration: 7000,
          iconTheme: {
            primary: '#ff4b4b',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}
