import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

  // title 값이 바뀔 때만 updateTitle이 실행된다.
    useEffect(updateTitle, [title]);

    return setTitle;
};

// const App = () => {
//   const titleUpdater = useTitle("Loading..."); // titleUpdater = setTitle
//   setTimeout(() => titleUpdater("Home"), 5000); // setTitle("Home")과 동일

//   return <div className="App"></div>;
// };

export default useTitle;
