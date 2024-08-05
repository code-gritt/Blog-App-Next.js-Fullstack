"use client";

import { blog_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import blog_logo from "../../../assets/blog_logo.webp";
import right_arrow from "../../../assets/right_arrow.png";
import ins from "../../../assets/instagram.png";
import red from "../../../assets/reddit.png";
import tum from "../../../assets/tumblr.png";
import twi from "../../../assets/twitter.png";
import fb from "../../../assets/facebook.png";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-900 py-3 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              width={100}
              src={blog_logo}
              alt=""
              className="w-[130px] rounded sm:w-auto"
            />
          </Link>

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
      <div className="text-center my-24">
        <h1 className="text-3xl font-semibold sm:text-3xl max-w-[700px] mx-auto text-[#3d3d3d]">
          {data.title}
        </h1>
        <span>By</span>
        <p className="max-w-[700px] mx-auto mt-1 pb-2 text-lg font-medium">
          {data.author}
        </p>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step-1 : Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis
          nihil aut animi architecto, voluptatum neque, odit obcaecati officia,
          consequatur a? Ullam quibusdam delectus hic. Nihil fuga corporis nobis
          unde.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step-1 : Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis
          nihil aut animi architecto, voluptatum neque, odit obcaecati officia,
          consequatur a? Ullam quibusdam delectus hic. Nihil fuga corporis nobis
          und
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step-1 : Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis
          nihil aut animi architecto, voluptatum neque, odit obcaecati officia,
          consequatur a? Ullam quibusdam delectus hic. Nihil fuga corporis nobis
          und
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis
          nihil aut animi architecto, voluptatum neque, odit obcaecati officia,
          consequatur a? Ullam quibusdam delectus hic. Nihil fuga corporis nobis
          unde.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex cursor-pointer">
            <Image src={ins} width={50} alt="" />
            <Image src={red} width={50} alt="" />
            <Image src={tum} width={50} alt="" />
            <Image src={twi} width={50} alt="" />
            <Image src={fb} width={50} alt="" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
