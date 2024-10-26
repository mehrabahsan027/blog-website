import React from "react";
import BlogComp from "../components/BlogComp";
import SideBar from "../components/SideBar";

function Blogs() {
  return (
    <>
      <section className="w-full lg:px-6  flex gap-x-8 mt-10">
        <div className=" w-full   px-4">
          <BlogComp />
         
        </div>
        <SideBar/>
      </section>
    </>
  ); 
}

export default Blogs;
