import { PiShuffleLight } from "react-icons/pi";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { RiMovieLine } from "react-icons/ri";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { SlVolume2 } from "react-icons/sl";

const Footer = () => {
    return (
        <div className="w-full bg-black fixed bottom-0 grid grid-cols-3 p-5">
            <div>
                <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                    <div className="max-h-[60px] max-w-[60px] rounded-md overflow-hidden">
                        <img
                            src="https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="font-bold">Trance</p>
                        <p className="text-gray-400 text-sm">
                            Travis Scott, Metro Boomin
                        </p>
                    </div>
                </li>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex justify-center gap-5 items-center">
                    <PiShuffleLight size={20} />
                    <IoPlaySkipBackSharp size={21} />
                    <FaCirclePlay size={35} />
                    <IoPlaySkipForwardSharp size={21} />
                    <RxLoop size={20} />
                </div>
                <div className="flex flex-row justify-center">
                    <p className="flex items-center gap-2">
                        <span className="text-[12px]">3:34</span>
                        <hr className="w-[400px] border-2"/>
                        <span className="text-[12px] pb-1">3:54</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-end items-center gap-3 pr-3">
                <RiMovieLine size={20} />
                <TbMicrophone2 size={20} />
                <HiOutlineQueueList size={20} />
                <FaComputer size={20} />
                <div className="flex items-center gap-[5px]">
                    <SlVolume2 size={20} />
                    <hr className="w-[50px] border-2" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
