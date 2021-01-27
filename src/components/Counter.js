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
// https://reactjs.org/docs/hooks-reference.html
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    // Diese Zeile erstellt uns eine Variable (count) die den Wert in den Klammern hinter useState als Startwert hat
    // und eine Funktion, die genutzt wird, diese Variable zu ändern 
    // const [a, b] = ["123", "hallo"] => a = "123" b = "hallo"
    // const [input, setInput] = useState([
    //     { name: "", age: "" }
    // ])
    const [input, setInput] = useState("")
    return (
        <div>
            <h1> {count}</h1>
            {/* Hier nutzen wir eine Arrow Function, damit die Funktion nicht direkt ausgeführt wird, sondern erst auf den Kliock des Buttons
            Sonst hatten wir die Möglichkeit, den Funktionsnamen ohne () am Ende zu schreiben. Da wir sie hier jedoch brauchen um einen Wert zu übergeben MÜSSEN wir die Arrow Funktion nutzen */}
            <button onClick={() => setCount(count + 1)}>+</button>
            {/* In manchen Fällen wollen wir den State nicht direkt mutieren, sondern brauchen den letzen zustand und verändern ihn. */}
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <input type="text" onChange={(event) => setInput(event.target.value)} value={input} />
            <p>{input}</p>
        </div>
    );
}

export default Counter;