import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogNavbar } from "../components/BlogNavbar";

const BlogCard = ({ blog, featured = false }) => {
  const cardClass = featured
    ? "bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 h-full flex flex-col"
    : "bg-[#05091e] relative p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-xl hover:shadow-[#AA8F76]/10 transition-all duration-300 h-full flex flex-col";

  return (
    <article className={cardClass}>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-xs hover:bg-[#AA8F76]/20 transition duration-300">
            {blog.category}
          </span>
        </div>

        <h3
          className={`font-bold mb-3 text-white transition-colors duration-300 ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {blog.title}
        </h3>

        <p
          className={`text-gray-400 mb-4 leading-relaxed flex-grow ${
            featured ? "text-sm" : "text-xs"
          }`}
        >
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        <button className="bg-[#AA8F76] text-white py-2 px-4 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:bg-[#8A6F56] flex items-center gap-2 group duration-300 text-sm mt-auto">
          Read More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

export const Blog = () => {
  const latestBlog = {
    id: 1,
    title: "My time at Linamar Corporation",
    excerpt: "My time as a machine operator",
    category: "Work",
    date: "Aug 10, 2025",
    readTime: "6 min read",
  };

  const blogs = [
    {
      id: 2,
      title: "Coming soon",
      excerpt: "Coming soon",
      category: "None",
      date: "Aug XX, 202X",
      readTime: "X min read",
    },
    {
      id: 3,
      title: "Coming soon",
      excerpt: "Coming soon",
      category: "None",
      date: "Aug X, 202X",
      readTime: "X min read",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <BlogNavbar />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
              Blogs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-300px)] min-h-[500px]">
          {/* Latest Blog - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                My Latest Blog
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-full"></div>
            </div>
            <BlogCard blog={latestBlog} featured={true} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Other Blogs Grid */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  Other Blogs
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
