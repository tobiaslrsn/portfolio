import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../misc/Loader";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
// import "./Navbar.scss";
import outlet from "./outlet.module.scss";
import footer from "./footer.module.scss";
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

      <main className={outlet.main}>
        {isLoading ? <Loader /> : <Outlet></Outlet>}
      </main>

      <footer className={footer.container}>
        <Footer></Footer>
      </footer>
    </>
  );
};
