import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import ToggleMode from "../components/ToggleMode";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-18 md:px-20 lg:px-20 xl:px-32 ">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
