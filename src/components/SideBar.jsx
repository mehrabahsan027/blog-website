import React, { useState } from "react";
import { blogData } from "../blogsData";
import { Link } from "react-router-dom";

function SideBar() {
  const latestBlogs = blogData.slice(12, 18);

  const [latestBlog, setLatestBlog] = useState(latestBlogs);

  return (
    <section className="hidden md:block space-y-5">
      <h2 className="font-semibold text-xl underline underline-offset-8 dark:text-yellow-200">
        Popular Blogs
      </h2>
      {latestBlog?.map((item) => {
        return (
          <div className="group">
            <h3 className="mb-2 font-semibold group-hover:text-red-800 group-hover:dark:text-yellow-100">
              {item.title}
            </h3>

            <Link to={`/blog/${item.id}`}>
              
              <button className="btn-one">Read</button>
            </Link>
            <hr className="mt-3" />
          </div>
        );
      })}
    </section>
  );
}

export default SideBar;
