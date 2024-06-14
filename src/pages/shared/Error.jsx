import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <img style={{ height: "100vh" }} src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000' alt="" />
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link to='/' className="bg-orange-400 btn text-white">Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;