import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, [navigate]);

  return (
    <>
      <div>
        <h1>NOT FOUND</h1>
        <br />
        <h3>Redirecting...</h3>
      </div>
    </>
  );
};
