import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>

      <Link
        href="/"
        className="flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit"
      >
        <IoMdHome className="w-7 h-7 " />
        <span className="font-bold hidden lg:inline">Home</span>
      </Link>

      <button className="bg-blue-400 shadow rounded-full hover:brightness-105 active:bg-blue-500 transition-all duration-200 text-white w-48 h-10 py-2 hidden lg:inline">
        Sign in
      </button>
    </div>
  );
};

export default SideBar;
