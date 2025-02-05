import React from "react";
import { Link, useParams } from "react-router-dom";
import blogList from "./blogs-list";

const Blog = () => {
  const { id } = useParams(); // Get the id from the URL
  const blog = blogList.find((item) => item.id === parseInt(id)); // Find the blog by id

  // If no blog is found, display a fallback message
  if (!blog) {
    return (
      <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary p-4">
        <div className="text-2xl sm:text-[3.5rem] mt-12 w-full text-center">
          <div className="w-full sm:w-4/5">
            <div className="font-bold">Error 404 | Blog not found</div>
            <p className="text-xl sm:text-4xl mt-4 font-medium">
              Should have caught this, whoops 🤷
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="px-4 py-2 mt-10 bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white bg-grid font-primary p-4">
      <div className="text-2xl sm:text-[3.5rem] w-full text-center mt-7">
        <div className="flex flex-col items-center py-10">
          {/* Image Section */}
          <div className="w-full sm:w-[45rem] flex justify-center px-2 sm:px-12">
            <img
              src={blog.imageUrl}
              alt="Blog Header"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="text-gray-500 text-sm font-secondary mt-4">{blog.date}</p>

          <h1 className="text-2xl sm:text-5xl font-bold mt-4 sm:mt-6 text-center leading-relaxed sm:leading-16 w-full sm:w-3/4">
            {blog.title}
          </h1>

          {/* Author Section */}
          <div className="flex items-center mt-4 sm:mt-6">
            <img
              src={blog.avatar}
              alt="Author"
              className="h-10 w-10 rounded-full mr-3 sm:mr-5"
            />
            <p className="text-gray-800 text-sm sm:text-[15px] font-semibold">
              {blog.author}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-[65%] mx-auto px-2 sm:px-8">
          {/* Dynamically inject template */}
          <div dangerouslySetInnerHTML={{ __html: blog.template }} />

          <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />
          <div className="w-full flex flex-col sm:flex-row justify-between items-center my-8 pt-6 gap-4">
            {/* Back to Blog Button */}
            <Link
              to="/"
              className="px-6 py-3 border text-gray-800 hover:bg-gray-100 transition-all w-full sm:w-auto text-center"
            >
              Back to Home
            </Link>

            <button
              onClick={() => {
                const tweetText = encodeURIComponent(
                  `Check out this blog post: ${blog.title}\n${window.location.href}`
                );
                const twitterUrl = `https://x.com/intent/tweet?text=${tweetText}`;
                window.open(twitterUrl, "_blank");
              }}
              className="px-6 py-3 border text-gray-800 hover:bg-gray-100 transition-all w-full sm:w-auto text-center"
            >
              Share article
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="w-full lg:w-1/4 px-2 sm:px-6 sticky top-16 h-[calc(100vh-4rem)] hidden lg:block mt-16">
          <div className="bg-gray-100 p-4 rounded-md shadow-sm overflow-auto">
            <h3 className="text-xl sm:text-2xl font-Inter font-semibold mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-2">
              {blog.headings.map((heading) => (
                <li key={heading.id} className="relative group mb-4">
                  <a
                    href={`#${heading.id}`}
                    className="text-sm flex items-center"
                  >
                    <p className="inline-block relative">
                      {heading.title}
                      <span className="absolute bottom-0 left-0 h-[1.5px] bg-black w-0 group-hover:w-full transition-all duration-600"></span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
