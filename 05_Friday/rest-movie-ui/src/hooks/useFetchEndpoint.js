import React, {useEffect, useState} from 'react';

export default function useFetchEndpoint(req) {
    const [res, setRes] = useState({
        data: null,
        isLoading: false,
        completed: false,
        error: false
    });

    useEffect(() => {
        setRes({
            data: null,
            isLoading: true,
            completed: false,
            error: false,
        });
        fetch(req.url, req.opts)
            .then(response => response.json())
            .then(response => setRes({
                data: response,
                isLoading: false,
                completed: true,
                error: false,
            }))
            .catch(() => setRes({
                data: null,
                isLoading: false,
                error: true,
                completed: true
            }))
    }, [req.opts, req.url]);
    return res;
}

