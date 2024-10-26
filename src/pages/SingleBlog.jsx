import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../blogsData";
import { FaUser } from "react-icons/fa";
import SideBar from "../components/SideBar";

function SingleBlog() {
  const { id } = useParams();

  const singleBlog = blogData.filter((item) => item.id == id);
  console.log(singleBlog);

  return (
    <section className="px-8 my-8">
      {singleBlog &&
        singleBlog.length > 0 &&
        singleBlog.map((item) => {
          return (
            <div className="flex justify-between items-start gap-x-8 ">
              {/* single blog */}
              <div className="w-full ">
                <div className=" lg:w-10/12 mx-auto h-auto lg:h-96">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 lg:px-8">
                  <h1 className="text-lg lg:text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <h3 className="dark:text-yellow-100 mb-5">
                    <FaUser className="inline-flex items-center mr-2" />
                    {item.author} | {item.published_date}
                  </h3>
                  <p className="lg:text-lg">
                    {" "}
                    {item.content}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quibusdam ipsa nostrum maxime consequuntur excepturi
                    eligendi ullam obcaecati dolorem itaque dignissimos
                    corporis, quae similique nesciunt pariatur ea odio nemo
                    perspiciatis libero ipsam magnam doloribus beatae accusamus?
                    Reiciendis quidem eius animi.
                  </p>
                  <br />
                  <p className="lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sapiente vero ab, animi quaerat odit provident officia
                    atque ad cupiditate labore, cumque accusamus odio explicabo?
                    Excepturi soluta voluptatem libero deserunt nostrum
                    voluptatibus quam ullam atque eius suscipit omnis
                    perferendis illum repellendus eum, eligendi inventore ab
                    consectetur? Ipsam tempore temporibus dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus est vero dolorem debitis amet, maiores sed omnis repudiandae, cupiditate quibusdam totam officiis alias illum corrupti incidunt tempore harum non rem aut reiciendis aspernatur facilis distinctio? Earum unde neque debitis pariatur tenetur vitae dicta atque odit modi adipisci, vero ab accusantium?
                  </p>
                </div>
              </div>

              {/* popular blogs */}
              <div className="hidden lg:block ">
                <SideBar />
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default SingleBlog;
