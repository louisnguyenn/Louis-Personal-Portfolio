import { useNavigate } from "react-router-dom";

export const Blog1 = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Hero");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium pt-15">
          My time at Linamar Corporation (specifically the Linamar Gear plant)
        </h2>
        <div className="mr-auto py-5">
          <p className="text-sm">Louis Nguyen</p>
          <p className="text-xs">AUG 10, 2025</p>
        </div>
        <img
          src="/Linamar-Gear.jpg"
          alt="Linamar Gear plant front entrance"
          className="w-160 h-160 py-10"
        ></img>
      </div>
    </div>
  );
};
