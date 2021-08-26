import React, { useEffect, useRef } from "react";

const useHover = (onHover) => {
    const element = useRef();

    useEffect(() => {
        // componentDidMount -> componentDidUpdate
        if (element.current) {
        element.current.addEventListener("mouseenter", onHover);
        }

        // componentWillUnMount 때에만 실행됨
        return () => {
        if (element.current) {
            element.current.removeEventListener("mouseenter", onHover);
        }
        };
    }, []); // dependancy 가 [] 비어있으므로, 첫 componentDidMount 시에만 실행됨

    if (typeof onHover !== "function") {
        return;
    }

    return element;
};

// const App = () => {
//     const sayHello = () => console.log("say Hello");
//     const title = useHover(sayHello);

//     return (
//         <div className="App">
//         <h1 ref={title}>Hi</h1>
//         </div>
//     );
// };

export default useHover;