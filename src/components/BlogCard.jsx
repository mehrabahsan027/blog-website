import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function BlogCard({ blog }) {
  console.log(blog);

  return (
    <div className="h-auto lg:h-[390px] group w-full ">
      <Link to={`/blog/${blog?.id}`}> 
        <div className="h-60">
          <img
            src={blog?.image}
            className="w-full h-full object-cover border  group-hover:dark:shadow-md group-hover:dark:shadow-yellow-200 border-gray-300 duration-150 dark:border-yellow-100"
          />
        </div>
        <div className="space-y-2 ">
          <h3 className="mt-3 group-hover:scale-110 duration-300 hover:dark:text-yellow-100 hover:text-red-800 font-semibold">
            {blog.title}
          </h3>
          <p className="dark:text-yellow-100">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p>Published: {blog.published_date}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
