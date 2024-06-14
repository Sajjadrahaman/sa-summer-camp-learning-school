

const Slide = ({ photo, subHeading, Heading, title,  }) => {
    return (
        <div className="h-fit flex items-center">
            <div>
                <div className="grid md:grid-cols-2 py-10 gap-10">
                    <div className="md:flex items-center">
                        <div>
                            <h5 className=" font-semibold text-lg text-orange-600">{subHeading}</h5>
                            <h2 className="text-3xl text-black font-bold py-3">{Heading}</h2>
                            <p className="text-black font-semibold">{title}</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-baseline ">
                        <img src={photo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;