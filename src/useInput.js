import React, { useState } from "react";

const useInput = (initialValue, validator) => {
    // useState()는 함수 최상단에 위치해야함
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        // console.log(event.target);

        let willUpdate = true;

        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

// 숫자 증감 코드를 class 컴포넌트 형식으로 만들어보고 차이점을 느껴보자
// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };

//   incrementItem = (state) => {
//     this.setState({
//       item: state.item + 1
//     });
//   };

//   decrementItem = (state) => {
//     this.setState({
//       item: state.item - 1
//     });
//   };

//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>증가</button>
//         <button onClick={this.decrementItem}>감소</button>
//       </div>
//     );
//   }
// }

export default useInput;