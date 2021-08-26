const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""; // 이 부분은 크롬에서만 필요함
    };

    const enablePrevent = () => {
        window.addEventListener("beforeunload", listener);
    };

    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    };

    return { enablePrevent, disablePrevent };
};

// const App = () => {
//     const { enablePrevent, disablePrevent } = usePreventLeave();
//     return (
//         <div className="App">
//             <button onClick={enablePrevent}>Protect</button>
//             <button onClick={disablePrevent}>UnProtect</button>
//         </div>
//     );
// };

export default usePreventLeave;