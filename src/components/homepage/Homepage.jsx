import Content from "../pages/Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Homepage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-between bg-[#121212] text-white p-3">
            <div className="max-w-[100vw] flex flex-row">
                <Sidebar />
                <div className="w-[75vw] h-[97vh] bg-[#1a1a1a] rounded-lg fixed right-2 overflow-scroll">
                    <Navbar />
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
