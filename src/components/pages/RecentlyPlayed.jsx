import Card from "../card/Card";

const RecentlyPlayed = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Recently Played</p>
                <p>Show all</p>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};

export default RecentlyPlayed;
