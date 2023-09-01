import * as React from "react";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matias Cancina | FullStack Dev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
