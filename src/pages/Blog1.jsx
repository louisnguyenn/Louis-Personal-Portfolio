import { useNavigate } from "react-router-dom";

export const Blog1 = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Hero");
  };

  return (
    <>
      <h2>Coming soon...</h2>
    </>
  );
};
