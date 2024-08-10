import React from "react";
import blog_logo from "../../assets/blog_logo.webp";
import plus_icon from "../../assets/plus_icon.png";
import list_icon from "../../assets/list_icon.png";
import sub_icon from "../../assets/sub_icon.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image
          width={95}
          src={blog_logo}
          alt=""
          className="w-[130px] rounded sm:w-auto"
        />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-blacl">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProduct"
            className="flex items-center cursor-pointer border border-black gap-3 font-medium px-3 py-3 shadow-[-7px_7px_0px_#3d3d3d] "
          >
            <Image
              width={28}
              src={plus_icon}
              alt=""
              className="w-[130px] rounded sm:w-auto"
            />
            <p>Add Blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center my-5 cursor-pointer border border-black gap-3 font-medium px-3 py-3 shadow-[-7px_7px_0px_#3d3d3d] "
          >
            <Image
              width={28}
              src={list_icon}
              alt=""
              className="w-[130px] rounded sm:w-auto"
            />
            <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="flex items-center cursor-pointer border border-black gap-3 font-medium px-3 py-3 shadow-[-7px_7px_0px_#3d3d3d] "
          >
            <Image
              width={28}
              src={sub_icon}
              alt=""
              className="w-[130px] rounded sm:w-auto"
            />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
