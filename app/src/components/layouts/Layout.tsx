import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../misc/Loader";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 1000);
  }, []);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>{isLoading ? <Loader /> : <Outlet></Outlet>}</main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
