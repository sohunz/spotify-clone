import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="px-5">
            <div className="p-[15px] ml-[110px] fixed top-[10px]">
                <div className="relative text-white flex items-center">
                    <input
                        type="text"
                        className="w-[25vw] bg-[#292929] h-12 px-10 pr-10 rounded-full text-sm focus:outline-none"
                        placeholder="What do you want to listen to?"
                    />
                    <button
                        type="submit"
                        className="absolute left-3 top-0 mt-3 mr-4"
                    >
                        <IoSearch className="text-grey-600 h-6 w-5 " />
                    </button>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-[90px]">
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    All
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Songs
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Artists
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Albums
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Playlists
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Profile
                </p>
                <p className="bg-[#292929] rounded-full px-3 py-2 text-sm">
                    Podcast & Show
                </p>
            </div>

            {/* table */}
            <table className="mt-5 w-full">
                <thead className="w-full bg-[#292929]">
                    <tr className="text-left">
                        <th className="py-2"># Title</th>
                        <th className="py-2">Alubum</th>
                        <th className="py-2">Time</th>
                    </tr>
                </thead>
                <tbody className="mt-3">
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                    <tr className="hover:bg-[#3c3c3c]">
                        <td className="py-1 px-3 rounded-lg">
                            <li className="w-full flex lg:justify-start md:justify-center sm:justify-center justify-center gap-3 py-2">
                                <div className="max-h-[50px] max-w-[50px] rounded-md overflow-hidden">
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
                        </td>
                        <td className="py-1">
                            <p className="text-[14px] lg:block md:hidden sm:hidden hidden ">
                                Start Over
                            </p>
                        </td>
                        <td className="py-1">3:14</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Search;
