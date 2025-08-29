import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useData<T>(url: string, enabled: boolean) {
    const dataRef = useRef<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;
        if (dataRef.current !== null) return;

        let ignore = false;
        setLoading(true);
        setError(null);
        axios
            .get(url)
            .then((response) => {
                if (!ignore) {
                    dataRef.current = response.data;
                }
            })
            .catch((error) => {
                setError(error.response.data);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            ignore = true;
        };
    }, [url, enabled]);

    return {
        data: dataRef.current,
        loading,
        error,
    };
}
