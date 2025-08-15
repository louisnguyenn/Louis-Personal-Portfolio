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
          <p className="text-gray-300 leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="text-gray-300 leading-relaxed text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <p className="text-gray-300 leading-relaxed text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};
