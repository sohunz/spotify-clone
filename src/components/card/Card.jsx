const Card = () => {
    return (
        <div>
            <div className=" rounded-md p-4 bg-[#202020]">
                <div className="rounded-md overflow-hidden">
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"
                        alt=""
                    />
                </div>
                <div className="py-3">
                    <p className="font-bold pt-3">MA MAN TRAVIS</p>
                    <p className="pb-2 text-gray-300">
                        Travis Scott, Drake, Vannda
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
