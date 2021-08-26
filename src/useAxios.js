import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
        ...state,
        loading: true
        });
        setTrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(opts)
        .then((data) => {
            setState({
            ...state,
            loading: false,
            data
            });
        })
        .catch((error) => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger]);

    if (!opts.url) {
        return;
    }

    return { ...state, refetch };
};

// const App = () => {
//     const { loading, data, error, refetch } = useAxios({
//         url: "https://yts.mx/api/v2/list_movies.json"
//     });

//     console.log("loading", loading);
//     console.log("data", JSON.stringify(data));
//     console.log("error", error);

//     return (
//         <div className="App">
//             <h1>{data && data.status}</h1>
//             <h1>{loading && "Loading..."}</h1>
//             <button onClick={refetch}>Reftech</button>
//         </div>
//     );
// };

export default useAxios;
