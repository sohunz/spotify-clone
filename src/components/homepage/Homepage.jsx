import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Homepage = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-between bg-[#121212] text-white overflow-y-hidden p-3'>
            
            <div className='max-w-[100vw] flex flex-row gap-3' >
                <Sidebar />
                <div className='w-full bg-[#1a1a1a] rounded-lg overflow-hidden'>
                    <Navbar />
                    <p>Main Content</p>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
