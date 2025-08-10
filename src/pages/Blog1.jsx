import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export const Blog1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={navigateHome}
        className="flex gap-1 items-center absolute left-4 top-4 px-4 py-2 text-sm font-medium text-gray-300 hover:scale-105 hover:text-white transition-all duration-300 cursor-pointer"
      >
        <ArrowLeft size={15} /> Go Back
      </button>
      <div className="flex flex-col justify-center items-center pt-20">
        <h2 className="text-3xl font-medium">
          My time at Linamar Corporation (specifically the Linamar Gear plant)
        </h2>
        <div className="mr-auto py-5">
          <p className="text-sm text-gray-300">Louis Nguyen</p>
          <p className="text-xs pb-2 text-gray-300">AUG 10, 2025</p>
        </div>
        <img
          src="/Linamar-Gear.jpg"
          alt="Linamar Gear plant front entrance"
          className="w-160 h-160"
        ></img>
      </div>
    </div>
  );
};
