import {useState, useEffect} from 'react'
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async (url) => {
            setIsLoading(true);
            try{
                const response = await axios.get(url, {
                    signal: controller.signal
                });
                if (isMounted){
                    setData(response.data)
                    setFetchError(null);
                }

            } catch (err){
                if (isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                //isMounted && setTimeout(() => setIsLoading(false), 2000);
                isMounted && setIsLoading(false);
            }
        }
        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false
            controller.abort()
        }

        return cleanUp;
    }, [dataUrl]);

    return {data, fetchError, isLoading}
}

export default useAxiosFetch