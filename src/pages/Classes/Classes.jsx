import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import ClassesCard from "../../components/ClassesCard/ClassesCard";

const Classes = () => {
    const [classes] = useClass();
    return (
        <div>
            <Helmet>
                <title>SA Camp | Al Class </title>
            </Helmet>
            <div className="grid sm:grid-cols-3 gap-10 w-10/12 mx-auto ">
                {
                    classes.map(item => <ClassesCard
                        key={item._id}
                        item={item}
                    ></ClassesCard>)
                }
            </div>

        </div>
    );
};

export default Classes;