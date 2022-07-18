import { useEffect, useState } from "react";

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
      <div>{showTopBtn && <button onClick={goToTop}>GO TO TOP</button>}</div>
    </>
  );
};
