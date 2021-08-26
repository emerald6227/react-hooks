import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        // componentDidMount -> componentDidUpdate
        document.addEventListener("mouseleave", handle);

        // componentWillUnMount
        return () => document.removeEventListener("mouseleave", handle);
    }, []); // 첫 componentDidMount 때에만 실행, 모든 state 변해도 실행 안됨

    if (typeof onBefore !== "function") {
        return;
    }
};

// const App = () => {
//     const begForLife = () => console.log("Please don't leave");
//     useBeforeLeave(begForLife);
//     return (
//         <div className="App">
//         <h1>Hello</h1>
//         </div>
//     );
// };

export default useBeforeLeave;