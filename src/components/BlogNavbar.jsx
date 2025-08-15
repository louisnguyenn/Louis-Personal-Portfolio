import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export const BlogNavbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40">
        <button
          onClick={navigateHome}
          className="flex gap-1 items-center absolute left-4 top-4 px-4 py-2 text-sm font-medium text-gray-300 hover:scale-105 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft size={15} /> Go Back
        </button>
      </nav>
    </>
  );
};
