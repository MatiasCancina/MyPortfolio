'use client'
import * as React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" />
        <title>Matias Cancina | FullStack Dev</title>
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
