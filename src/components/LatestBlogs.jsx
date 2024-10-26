import React, { useState } from "react";
import { blogData } from "../blogsData";
import BlogCard from "./BlogCard";

function LatestBlogs() {
  const latestBlogs = blogData.slice(0, 8);
  const [latestBlog, setLatestBlog] = useState(latestBlogs);
  console.log(latestBlog);
  

  return (
    <section className="my-8 px-4">
        <h2 className="text-center mb-3 text-2xl lg:text-3xl dark:text-yellow-200">Latest Blogs</h2>
        <div className="w-full lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
      {latestBlog &&
        latestBlog.length >0
        &&  latestBlog.map((item, index) => {
            return <BlogCard blog={item} key={index} />;
          })}
    </div>
    </section>
    
  );
}

export default LatestBlogs;
