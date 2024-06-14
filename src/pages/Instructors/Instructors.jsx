import { Helmet } from 'react-helmet-async';
import useInstructors from '../../hooks/useInstructors';
import SingleInstructors from './singleInstructors';

const Instructors = () => {
    const [instructors] = useInstructors();


    return (

        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>SA Camp | Instructors </title>
            </Helmet>
            <div className="grid sm:grid-cols-2 gap-10 ">
                {
                    instructors.map(item => <SingleInstructors
                        key={item._id}
                        item={item}
                    ></SingleInstructors>)
                }
            </div>

        </div>
    );
};

export default Instructors;