// class Counter extends Component {
//     state = {
//         counter: 0
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.counter}
//                 <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
//             </div >
//         );
//     }
// }

// export default Counter;
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    // Diese Zeile erstellt uns eine Variable (count) die den Wert in den Klammern hinter useState als Startwert hat
    // und eine Funktion, die genutzt wird, diese Variable zu ändern 
    // const [a, b] = ["123", "hallo"] => a = "123" b = "hallo"
    // const [input, setInput] = useState([
    //     { name: "" }
    // ])
    console.log(setCount)
    return (
        <div>
            <h1> {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;