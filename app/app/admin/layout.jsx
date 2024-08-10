import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import profile_icon from "../../assets/profile_icon.png";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 mx-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              width={40}
              src={profile_icon}
              alt=""
              className="w-[130px] rounded sm:w-auto"
            />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
