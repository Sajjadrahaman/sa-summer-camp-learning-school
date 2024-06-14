import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get('/classes')
            .then(data => {
                setClasses(data.data)
                setLoading(false)
            })
    }, [axiosSecure]);

    return [classes, loading];

}


export default useClass;