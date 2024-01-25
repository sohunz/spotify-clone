import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className=" w-[75vw] flex justify-between p-5 fixed bg-[#1a1a1a] rounded-lg ">
            <div className="flex items-center gap-3">
                <div className=" max-h-[50px] max-w-[50px] rounded-full p-2 bg-[#101010] cursor-pointer">
                    <IoIosArrowBack size={21} />
                </div>
                <div className=" max-h-[50px] max-w-[50px] rounded-full p-2 bg-[#101010] cursor-pointer">
                    <IoIosArrowForward size={21} />
                </div>
            </div>
            <div className="flex gap-3">
                <div className=" max-h-[50px] max-w-[50px] rounded-full p-2 bg-[#101010] cursor-pointer">
                    <IoIosNotificationsOutline size={21} />
                </div>
                <div className=" max-h-[50px] max-w-[50px] rounded-full p-2 bg-[#101010] cursor-pointer">
                    <HiOutlineUserGroup size={21} />
                </div>
                <div className=" max-h-[50px] max-w-[50px] rounded-full p-2 bg-[#101010] cursor-pointer">
                    <CiUser size={21} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
