import { useNavigate } from "react-router-dom";

export const Blog1 = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Hero");
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onclick={navigateHome}></button>
    </>
  );
};
