import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useData<T>(url: string, enabled: boolean) {
    const [requestUrl, setRequestUrl] = useState<string>(url);
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const dataRef = useRef<Record<string, T>>({});

    useEffect(() => {
        setRequestUrl(url);
    }, [url]);

    useEffect(() => {
        if (!enabled) return;

        const cached = dataRef.current[requestUrl];
        if (cached) {
            setData(cached);
            setLoading(false);
            setError(null);
            return;
        }

        let isCancelled = false;
        setLoading(true);
        setError(null);

        axios
            .get(requestUrl)
            .then((response) => {
                if (!isCancelled) {
                    dataRef.current[requestUrl] = response.data;
                    setData(response.data);
                }
            })
            .catch((err) => {
                if (!isCancelled) {
                    const message =
                        err?.response?.data ?? "Failed to load data";
                    setError(
                        typeof message === "string"
                            ? message
                            : JSON.stringify(message),
                    );
                }
            })
            .finally(() => {
                if (!isCancelled) {
                    setLoading(false);
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [requestUrl, enabled]);

    return {
        data,
        loading,
        error,
        setUrl: setRequestUrl,
    };
}
