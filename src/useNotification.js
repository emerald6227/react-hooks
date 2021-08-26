const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== "granted") {
        // 알림 허용이 아닐경우 허용할 것인지 물어본다.
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
            new Notification(title, options);
            } else {
            return;
            }
        });
        } else {
        new Notification(title, options);
        }
    };

    return fireNotif;
};

// const App = () => {
//     const triggerNotif = useNotification("타이틀 부분이다.", {
//         body: "body 부분이다."
//     });

//     return (
//         <div className="App">
//         <button onClick={triggerNotif}>Hello</button>
//         </div>
//     );
// };

export default useNotification;
