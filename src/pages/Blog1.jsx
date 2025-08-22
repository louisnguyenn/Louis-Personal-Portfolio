import { BlogNavbar } from "../components/BlogNavbar";

export const Blog1 = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col justify-center items-center pt-20">
        <BlogNavbar />
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

        <div className="px-4 space-y-6 py-8">
          <p className="text-gray-300 leading-relaxed text-xl"></p>

          <p className="text-gray-300 leading-relaxed text-xl"></p>

          <p className="text-gray-300 leading-relaxed text-xl"></p>
        </div>
      </div>
    </div>
  );
};
