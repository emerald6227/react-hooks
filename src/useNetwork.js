import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine); // true or false 값 반환

    const handleChange = () => {
        if (typeof onChange === "function") {
        onChange(navigator.onLine);
        }
        setStatus(navigator.onLine); // true or false 값 반환해줌
    };

    useEffect(() => {
        // componentDidMount => componentDidUpdate
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        // componentWillUnMount
        return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};

// const App = () => {
//     const handleNetworkChange = (online) => {
//         console.log(online ? "We Just went online" : "We are offline");
//     };
//     const onLine = useNetwork(handleNetworkChange);
//     return (
//         <div className="App">
//         <h1>{onLine ? "Online" : "Offline"}</h1>
//         </div>
//     );
// };

export default useNetwork;