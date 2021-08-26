import React from "react";
import useTitle from "./useTitle";
import useFullscreen from "./useFullscreen";

const App = () => {
    const callback = (isFull) => {
        console.log(isFull ? "we are full" : "we are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(callback);

    return (
        <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
            <img
            alt="cat"
            src="http://image.dongascience.com/Photo/2019/09/d2468576cecf1313437de5a883bfa2ed.jpg"
            />
            <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};

export default App;
