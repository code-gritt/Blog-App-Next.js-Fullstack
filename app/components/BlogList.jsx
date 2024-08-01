"use client";

import { blog_data } from "@/assets/assets";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogItem from "./BlogItem";
import library from "../assets/Library.png";

const BlogList = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="flex justify-center gap-6 my-10">
        <button className="bg-[#3d3d3d] text-white py-1 px-4 rounded">
          All
        </button>
        <button>Technology</button>
        <button>Startup</button>
        <button>Lifestyle</button>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
      >
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={library}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
