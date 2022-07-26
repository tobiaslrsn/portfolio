import { useEffect, useState } from "react";
import scss from "./footer.module.scss";
export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 200) {
        setShowTopBtn(true);
      } else if (window.scrollY < 100) {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {showTopBtn && (
          <button onClick={goToTop} className={scss.scrolltotop}>
            GO TO TOP
          </button>
        )}
      </div>

      <div className={scss.social}>
        <a href="https://www.instagram.com/tobiaslrsn/" target="_blank">
          INSTAGRAM
        </a>
        <a href="https://github.com/tobiaslrsn">GITHUB</a>
        <a href="https://www.linkedin.com/in/tobiaslrsn/" target="_blank">
          LINKEDIN
        </a>
        <p>EMAIL</p> {/* COPY TO CLIPBOARD HOVER MESSAGE? */}
      </div>
    </>
  );
};
