import Image from "next/image";
import React from "react";
import blog_logo from "../assets/blog_logo.webp";
import right_arrow from "../assets/right_arrow.png";

const Header = () => {
  return (
    <>
      <div className="py-3 px-5 md:px-12 lg:px-28 shadow-lg rounded bg-[#fbbf24]">
        <div className="transition-all ease-in-out delay-150 flex justify-between items-center">
          <Image
            width={100}
            src={blog_logo}
            alt=""
            className="w-[130px] rounded sm:w-auto"
          />
          <button
            className="transition ease-in-out delay-100 shadow-lg hover:scale-105 bg-[#3d3d3d] text-white flex gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 
          border border-solid border-black items-center rounded"
          >
            Get Started
            <Image
              width={10}
              src={right_arrow}
              alt=""
              className="w-[130px] transition ease-in-out delay-100 rounded sm:w-auto text-white bg-white p-1 hover:translate-x-1.5"
            />
          </button>
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          optio sapiente id, asperiores eligendi quia, voluptates ipsum nesciunt
          repellendus illum sequi earum deserunt tempore dicta saepe beatae?
          Illo, commodi quo?
        </p>
        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto border border-black shadow-[-7px_7px_0px_#3d3d3d] rounded mt-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="pl-4 outline-none "
          />
          <button
            type="submit"
            className="transition ease-in-out delay-100 shadow-lg bg-[#3d3d3d] text-white flex gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 
          border border-solid border-black items-center rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
