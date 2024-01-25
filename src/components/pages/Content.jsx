import RecentlyPlayed from "./RecentlyPlayed";
import MadeForUser from "./MadeForUser";
import Recommended from "./Recommended";

const Content = () => {
    return (
        <div className="p-5 mt-[70px]">
            <RecentlyPlayed />
            <MadeForUser />
            <Recommended />
        </div>
    );
};

export default Content;
