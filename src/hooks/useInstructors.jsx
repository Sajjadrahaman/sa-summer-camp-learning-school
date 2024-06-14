import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () =>{
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
       axiosSecure.get('https://sa-summer-camp-server-six.vercel.app/instructors')
            .then(data => {
                setInstructors(data.data)
                setLoading(false)
            })
    }, [axiosSecure])

    return [instructors, loading]

}

export default useInstructors;