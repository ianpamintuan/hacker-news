import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [list, setList] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setIsLoading(true);
        fetch(url, { signal: abortCont.signal })
            .then((response) => response.json())
            .then((data) => {
                setList(data);
                setError(null);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    setList(null);
                }
            })
            .finally(() => setIsLoading(false));

        return () => abortCont.abort();
    }, [url]);

    return { list, loading, error };
};
