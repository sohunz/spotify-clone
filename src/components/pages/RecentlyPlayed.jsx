import Card from "../card/Card";

const RecentlyPlayed = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Recently Played</p>
                <p>Show all</p>
            </div>
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-5 md:gap-3 sm:gap-3 gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default RecentlyPlayed;
