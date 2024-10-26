import React, { useEffect, useState } from "react";
import { blogData } from "../blogsData";
import BlogCard from "./BlogCard";
import SideBar from "./SideBar";

function BlogComp() {
  const [blog, setBlog] = useState(blogData);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = blog.length;

  const numOfPages = Math.ceil(totalBlogs / perPage);
  const pages = [...Array(numOfPages + 1).keys()].slice(1);

  useEffect(() => {
    const filteredBlog = blogData.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    if (filteredBlog == "") {
      setBlog(blogData);
    } else setBlog(filteredBlog);

    setCurrentPage(1);
  }, [selectedCategory]);

  const prevHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage !== numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value); // Set the selected category from dropdown
  };

  // Calculate visible items for the current page
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const visibleBlogs = blog?.slice(firstIndex, lastIndex);

  return (
    <section className="w-full ">
      {/* category */}
      <div className="w-full mb-8">
        <label htmlFor="category" className="mr-4 font-bold px-4">
          Select Category:
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategory}
          className="p-2 border border-gray-400 bg-transparent dark:border-yellow-500 rounded"
        >
          <option value="">All</option>
          <option  value="Tech">Tech</option>
          <option value="Health">Health</option>
          <option value="Fitness">Fitness</option>
          <option value="Biotech">Biotech</option>
          <option value="AI">AI</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

     {/* blog section */}
      
         {/* blog card */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 px-4">
        {visibleBlogs?.map((item,index) => {
          return <BlogCard blog={item} key={index}/>;
        })}
      </div>
      
     

     
   
      {/* pagination */}
      <div className="w-full text-center space-x-3 mt-8">
        <button
          className="btn-one border-black dark:border-yellow-500"
          onClick={prevHandler}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`${
              currentPage === page ? "bg-red-600" : ""
            } px-3 m-1 border dark:border-yellow-500`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="btn-one border-black dark:border-yellow-500"
          onClick={nextHandler}
          disabled={currentPage === numOfPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default BlogComp;
