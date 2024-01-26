import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineListBullet } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className="lg:min-w-[23vw] md:min-w-[15px] sm:min-w-[15px] rounded-lg fixed">
            <header className=" bg-[#1a1a1a] mb-3 rounded-lg p-5 font-bold flex lg:justify-start md:justify-center justify-center">
                <ul className="flex flex-col gap-5 items-center">
                    <li className="flex items-center gap-5 cursor-pointer">
                        <GoHomeFill size={27} />
                        <span className="lg:block md:hidden sm:hidden hidden">
                            Home
                        </span>
                    </li>
                    <li className="flex items-center gap-5 cursor-pointer">
                        <IoSearch size={27} />
                        <span className="lg:block md:hidden sm:hidden hidden">
                            Search
                        </span>
                    </li>
                </ul>
            </header>

            <div className="w-full min-h-[80vh] bg-[#1a1a1a] rounded-lg p-5 flex flex-col lg:items-start md:items-center items-center">
                <div className=" flex lg:justify-between md:justify-center sm:justify-center justify-center lg:pb-5 md:pb-1 sm:pb-1 pb-1  w-full">
                    <p className="flex items-center gap-3 cursor-pointer font-bold">
                        <VscLibrary size={27} />
                        <span className="lg:block md:hidden sm:hidden hidden">
                            Your Library
                        </span>
                    </p>
                    <div className="flex lg:gap-2">
                        <GoPlus
                            size={27}
                            className="cursor-pointer lg:block md:hidden sm:hidden hidden"
                        />
                        <HiOutlineArrowSmallRight
                            size={27}
                            className="cursor-pointer lg:block md:hidden sm:hidden hidden"
                        />
                    </div>
                </div>
                <div className=" pb-4 lg:block md:hidden sm:hidden hidden">
                    <p className="rounded-full px-3 pb-2 pt-1 border inline-block text-center border-none bg-[#1f2d3c] cursor-pointer text-[14px]">
                        Playlists
                    </p>
                </div>
                <div className=" w-full lg:flex md:hidden sm:hidden hidden flex-row justify-between items-center pb-2">
                    <IoSearch size={20} className="cursor-pointer" />
                    <div className="flex gap-2 items-center cursor-pointer">
                        <p className="pb-1 text-[14px]">Recents</p>
                        <HiOutlineListBullet size={25} />
                    </div>
                </div>

                {/* list */}
                <div className="pt-2 w-full">
                    <ul className=" w-full flex flex-col ">
                        <li className=" w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer ">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img
                                    src="https://i.scdn.co/image/ab67706c0000da844231efe5dc16b345991bb040"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold lg:block md:hidden sm:hidden hidden">
                                <p>Travis Scott</p>
                                <p>Playlist</p>
                            </div>
                        </li>
                        <li className=" w-full flex lg:justify-start md:justify-center sm:justify-center justify-center  gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img
                                    src="https://i.pinimg.com/474x/c2/60/02/c2600292c5bd667563da20534d9458bf.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold lg:block md:hidden sm:hidden hidden">
                                <p className="font-bold lg:block md:hidden sm:hidden hidden">
                                    Sad Vibe
                                </p>
                                <p className="text-[14px] lg:block md:hidden sm:hidden hidden">
                                    Playlist
                                </p>
                            </div>
                        </li>
                        <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img
                                    src="https://i.scdn.co/image/ab67706f00000002d4b123e7ae0a84047ab62164"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold lg:block md:hidden sm:hidden hidden">
                                <p className="font-bold lg:block md:hidden sm:hidden hidden">
                                    Taylor Swift
                                </p>
                                <p className="text-[14px] lg:block md:hidden sm:hidden hidden">
                                    Playlist
                                </p>
                            </div>
                        </li>
                        <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img
                                    src="https://i.scdn.co/image/ab67706c0000da84aa4ee776c2a99b717f0c7a73"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold lg:block md:hidden sm:hidden hidden">
                                <p className="font-bold lg:block md:hidden sm:hidden hidden">
                                    The Weeknd
                                </p>
                                <p className="text-[14px] lg:block md:hidden sm:hidden hidden">
                                    Playlist
                                </p>
                            </div>
                        </li>
                        <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img
                                    src="https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold lg:block md:hidden sm:hidden hidden">
                                <p className="font-bold lg:block md:hidden sm:hidden hidden">
                                    Chilling Beach
                                </p>
                                <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                    Playlist
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
