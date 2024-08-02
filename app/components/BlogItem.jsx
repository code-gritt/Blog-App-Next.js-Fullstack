import Image from "next/image";
import React from "react";
import library from "../assets/Library.png";
import right_arrow from "../assets/right_arrow.png";

const BlogItem = ({ title, description, category }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] transition ease-in-out delay-100 bg-white hover:shadow-[-7px_7px_0px_#3d3d3d] border border-black showBox">
      <Image
        src={library}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p className="ml-5 mt-5 px-2 py-2 inline-block rounded bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {" "}
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className="inline-flex cursor-pointer items-center py-2 font-semibold text-center">
          Read More{" "}
          <Image
            width={10}
            src={right_arrow}
            alt=""
            className="w-[130px] transition ease-in-out delay-100 rounded sm:w-auto text-white bg-white p-1 hover:translate-x-1.5"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
