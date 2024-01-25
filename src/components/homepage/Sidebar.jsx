import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineListBullet } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className="min-w-[23vw] rounded-lg">
            <header className=" bg-[#1a1a1a] mb-3 rounded-lg p-5 font-bold">
                <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-5 cursor-pointer">
                        <GoHomeFill size={27} />
                        Home
                    </li>
                    <li className="flex items-center gap-5 cursor-pointer">
                        <IoSearch size={27} />
                        Search
                    </li>
                </ul>
            </header>
            <div className="min-h-[80vh] bg-[#1a1a1a] rounded-lg p-5">
                <div className=" flex justify-between pb-5">
                    <p className="flex items-center gap-3 cursor-pointer font-bold">
                        <VscLibrary size={27}/>
                        Your Library
                    </p>
                    <div className="flex gap-4">
                    <GoPlus size={27} className="cursor-pointer"/>
                    <HiOutlineArrowSmallRight size={27} className="cursor-pointer" />
                    </div>
                </div>
                <div className=" pb-4">
                    <p className="rounded-full px-3 pb-2 pt-1 border inline-block text-center border-none bg-[#1f2d3c] cursor-pointer text-[14px]">Playlists</p>
                </div>
                <div className=" flex flex-row justify-between items-center pb-2">
                    <IoSearch size={20} className="cursor-pointer" />
                    <div className="flex gap-2 items-center cursor-pointer">
                        <p className="pb-1 text-[14px]">Recents</p>
                        <HiOutlineListBullet size={25}/>
                    </div>
                </div>

                {/* list */}
                <div className="pt-2">
                    <ul>
                        <li className="flex gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img src="https://i.scdn.co/image/ab67706c0000da844231efe5dc16b345991bb040" alt="" />
                            </div>
                            <div>
                                <p className="font-bold">Travis Scott</p>
                                <p className="text-[14px]">Playlist</p>
                            </div>
                        </li>
                        <li className="flex gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img src="https://i.pinimg.com/474x/c2/60/02/c2600292c5bd667563da20534d9458bf.jpg" alt="" />
                            </div>
                            <div>
                                <p className="font-bold">Sad Vibe</p>
                                <p className="text-[14px]">Playlist</p>
                            </div>
                        </li>
                        <li className="flex gap-3 py-2 rounded-md hover:bg-[#1f1f1f] transition-300 cursor-pointer">
                            <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
                                <img src="https://i.scdn.co/image/ab67706f000000024df8780914e3c45e2e0aea4e" alt="" />
                            </div>
                            <div>
                                <p className="font-bold">Travelling</p>
                                <p className="text-[14px]">Playlist</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
