
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useinstructor";
import useAuth from "../hooks/useAuth";



const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    const [isInstructor, isInstructorLoading] = useInstructor();

    if(loading || isInstructorLoading){
        return <div className="text-center">
            <span className="loading  loading-dots loading-lg"></span>
        </div>
    }
    if(user && isInstructor){
        return children;
    }
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;