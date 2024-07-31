import Image from "next/image";
import React from "react";
import library from "../assets/Library.png";
import { blog_data } from "@/assets/assets";

const BlogItem = () => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] transition ease-in-out delay-100 bg-white hover:shadow-[-7px_7px_0px_#3d3d3d] border border-black">
      <Image
        src={library}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p>{blog_data[0].category}</p>
    </div>
  );
};

export default BlogItem;
