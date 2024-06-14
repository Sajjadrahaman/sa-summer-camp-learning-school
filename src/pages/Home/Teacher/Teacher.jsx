

const Teacher = ({ item }) => {
    const { instructor_name, image_url, email, language } = item;
        return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="bg-[#edfdfc] " style={{height: '300px'}}><img src={image_url} className="w-full h-full" alt="Movie" /></figure>
            <div className="card-body  justify-center">
                <h2 className="card-title"> Name :{instructor_name}</h2>
                <h6>Email : {email}</h6>
                <h6>Language : {language}</h6>
            </div>
        </div>
        );
};

export default Teacher;