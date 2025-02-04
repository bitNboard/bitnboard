import { Link } from "react-router-dom";
import blogList from "./blogs-list";

const Blogs = () => {
  return (
    <div className="py-16 px-4 font-primary flex flex-col w-4/5 mt-12">
      <h1 className="text-2xl font-bold w-1/4">All Blogs</h1>
      <p className="text-base mt-2">
        Want to dive in deeper into a specific category? Click on a topic below.
      </p>
      {/* Grid layout for proper spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-6">
        {blogList.map((blog) => (
          <Link to={`/blogs/${blog.id}`}>
          <div
            key={blog.id}
            className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full h-[30rem] overflow-hidden"
          >
            {/* Fixed image height */}
            <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={blog.imageUrl}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Card content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold overflow-hidden text-ellipsis line-clamp-1">
                {blog.title}
              </h6>

              {/* Description with ellipsis */}
              <p className="text-slate-600 leading-normal font-light overflow-hidden text-ellipsis line-clamp-3">
                {blog.description}
              </p>

              <p className="text-slate-500 text-[0.85rem] mt-2 font-secondary">{blog.date}</p>
            </div>

            {/* Read more button */}
            <div className="px-4 pb-4 pt-0">
              
                <button
                  className="rounded-md cursor-pointer bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 hover:bg-slate-700"
                  type="button"
                >
                  Read more
                </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
