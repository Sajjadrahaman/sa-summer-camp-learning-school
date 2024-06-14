import Teacher from "../Teacher/Teacher";
import useInstructors from "../../../hooks/useInstructors";

const SomeInstructors = () => {

    const [instructors] = useInstructors()
    const sixTeacher = instructors.slice(0,6)


    return (
        <div className="w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center my-5">Meet Our Teacher</h2>
            <div className="grid sm:grid-cols-2 gap-20 text-center">
                {
                    sixTeacher.map(item => <Teacher
                    key={item._id}
                    item={item}
                    > </Teacher>)
                }
            </div>
        </div>
    );
};

export default SomeInstructors;