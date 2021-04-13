import "../styles/index.css";
import { AppProps } from "next/app";
import React from "react";
import { CategoryContextProvider } from "../contexts/CategoryContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoryContextProvider>
      <Component {...pageProps} />
    </CategoryContextProvider>
  );
}
