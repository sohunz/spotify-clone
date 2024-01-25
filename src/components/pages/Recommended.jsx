import Card from "../card/Card";

const Recommended = () => {
    return (
        <div className="my-10">
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Recommended</p>
                <p>Show all</p>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};

export default Recommended;
