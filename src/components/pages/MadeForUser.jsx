import Card from "../card/Card";

const MadeForUser = () => {
    return (
        <div className="my-10">
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Made For JDM</p>
                <p>Show all</p>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};

export default MadeForUser;
