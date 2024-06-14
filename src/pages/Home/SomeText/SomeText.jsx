

const SomeText = () => {
    return (
        <div className=" w-10/12 mx-auto py-10">
            <h2 className="my-10 text-center text-3xl font-bold text-teal-600">Extra Section</h2>
            <div className="grid sm:grid-cols-2 gap-10">
            <div>
                <img style={{height: '400px'}} className="rounded-lg" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" alt="" />
            </div>
            <div className="flex items-center">
                <p className="font-semibold text-xl ">Welcome to the fascinating world of language learning! Whether youre embarking on this journey for personal enrichment, academic purposes, or to communicate with people from diverse cultures, learning a new language opens up a multitude of opportunities. In this text, well delve into the benefits, challenges, and effective strategies for mastering a foreign tongue.</p>
            </div>
        </div>
        </div>
    );
};

export default SomeText;