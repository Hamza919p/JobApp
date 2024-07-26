import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'x-rapidapi-key': 'b4e7d63b72msh5333e18be3ef2a6p1364c8jsnbc5315bede40',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

    async function fetchData() {
        setLoading(true);

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect( ()=> {
        fetchData();
    }, [] )

    const refetch = () => {
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;