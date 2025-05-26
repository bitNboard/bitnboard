import React from "react";

const Projects = () => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary pb-16">
      <div className="text-[6.5rem] w-full flex justify-center text-center mt-7">
        <div className="w-4/5 text-center">
          <div className="font-bold">Projects</div>
          <p className="text-base font-medium">
            A platform where you'll find the right content to help you improve your skills and grow your knowledge.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
       

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mt-12 mb-16">
          {/* Project Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://placehold.co/600x400"
                alt="BitNBoard Platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">BitNBoard Platform</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive platform for developers to share knowledge, collaborate, and grow their skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 