
import ClassesCard from "../../../components/ClassesCard/ClassesCard";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
    const [classes] = useClass();
    const sixClasses = classes.slice(0, 6);


    return (
        <div>
            <div className="w-10/12 mx-auto my-10">
                <h2 className="text-3xl font-bold text-center my-5">Meet Our Class</h2>
                <div className="grid sm:grid-cols-3 gap-20 ">
                    {
                        sixClasses.map(item => <ClassesCard
                            key={item._id}
                            item={item}
                        ></ClassesCard>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;