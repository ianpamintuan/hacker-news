import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [list, setList] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
                setError(null);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setList(null);
            })
            .finally(() => setIsLoading(false));
    }, [url]);

    return { list, loading, error };
};
