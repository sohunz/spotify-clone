import Content from "../pages/Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Search from "../search/Search";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-between bg-[#121212] text-white p-3 relative">
            <div className="max-w-[100vw] flex flex-row relative">
                <Sidebar />
                <div className="lg:w-[75vw] md:w-[85vw] sm:w-[80vw] w-[75vw] h-[81vh] bg-[#1a1a1a] rounded-lg fixed right-2 overflow-scroll">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
