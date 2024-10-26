import React from "react";

import Social from "./Social";

function Footer() {
  return (
    <footer className="py-8 lg:py-16 ">
      <section className="w-full lg:w-10/12  mx-auto grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-x-16  mb-5 px-8 lg:px-0" >
        {/* logo and text */}
        <div className="mx-auto">
          <h1 className="text-2xl lg:text-3xl dark:text-yellow-100 py-3">Logo</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            distinctio fugiat assumenda laboriosam cupiditate porro aspernatur,
            maiores perferendis praesentium tenetur!
          </p>
        </div>

        {/* categories */}

        <div className="mx-auto">
          <h3 className="text-2xl dark:text-yellow-100 py-3">Categories</h3>
          <ul className="mt-5 space-y-3 text-lg text-center">
            <li>Tech</li>
            <li>AI</li>
            <li>Health</li>
            <li>Biotech</li>
          </ul>
        </div>

        {/* social */}
        <div className="mx-auto"> 
          <h3 className="text-2xl dark:text-yellow-100 py-3 mb-5">Social Links</h3>
        <Social/>

        </div>
      </section>

{/* copyright */}
      <section>
        <hr />
        <div className="text-center mt-3 px-4">Copyright © 2024 Brand Name. All right reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
