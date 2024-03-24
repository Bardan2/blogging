import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section
      style={{
        background: mode === "dark" ? "#0f0f30" : "#f0f0f5",
        // backgroundImage: URL(
        //   "https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg"
        // ),
      }}
    >
      {/* Hero Section  */}
      <div className="container mx-auto mb-5 flex px-5 py-40 items-center justify-center flex-col bg-[url('https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Main Content  */}
        <main>
          <div className="text-center ">
            <div className="mb-0 ">
              {/* Image  */}

              {/* Text  */}
              <h1
                style={{
                  color: "#0c0c2b",
                  background: "rgba(99, 99, 99, 0.439)",
                }}
                className=" text-3xl font-bold  px-20 pt-10 "
              >
                Welcome to MyBlog
              </h1>
            </div>

            {/* Paragraph  */}
            <p
              style={{
                color: "white",
                background: "rgba(40, 40, 100, 0.439)",
              }}
              className="sm:text-3xl text-xl font-extralight sm:mx-auto px-20 pb-10 "
            >
              Here are some blogs contributed by MyBlog.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
