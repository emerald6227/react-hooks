import React, { useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef();

    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
        callback(isFull);
        }
    };

    const triggerFull = () => {
        if (element.current) {
        if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
            element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullScreen) {
            element.current.webkitRequestFullScreen();
        } else if (element.current.msRequestFullScreen) {
            element.current.msRequestFullScreen();
        }
        runCb(true);
        }
    };

    const exitFull = () => {
        if (document.fullscreenElement) {
        document.exitFullscreen();
        runCb(false);
        }
    };

    return { element, triggerFull, exitFull };
};

// const App = () => {
//     const callback = (isFull) => {
//         console.log(isFull ? "we are full" : "we are small");
//     };
//     const { element, triggerFull, exitFull } = useFullscreen(callback);

//     return (
//         <div className="App" style={{ height: "1000vh" }}>
//         <div ref={element}>
//             <img
//             alt="cat"
//             src="http://image.dongascience.com/Photo/2019/09/d2468576cecf1313437de5a883bfa2ed.jpg"
//             />
//             <button onClick={exitFull}>Exit fullscreen</button>
//         </div>
//         <button onClick={triggerFull}>Make fullscreen</button>
//         </div>
//     );
// };

export default useFullscreen;