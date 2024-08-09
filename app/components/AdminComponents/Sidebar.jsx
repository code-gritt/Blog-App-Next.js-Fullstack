import React from "react";
import blog_logo from "../../assets/blog_logo.webp";
import plus_icon from "../../assets/plus_icon.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image
          width={100}
          src={blog_logo}
          alt=""
          className="w-[130px] rounded sm:w-auto"
        />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-blacl">
        <div className="flex items-center cursor-pointer border border-black gap-3 font-medium px-3 py-3 shadow-[-7px_7px_0px_#3d3d3d] ">
          <Image
            width={28}
            src={plus_icon}
            alt=""
            className="w-[130px] rounded sm:w-auto"
          />
          <p>Add Blogs</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
