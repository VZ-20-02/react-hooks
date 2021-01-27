import { useState, useEffect } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // So wird der useEffect immer ausgeführt, wenn die Komponente geladen wird aber auch wenn sich ein state ändert!
    // useEffect(() => {
    //     console.log("Hello World")
    // })
    useEffect(() => {
        console.log("Count 2 Updated")
    }, [count2])
    useEffect(() => {
        console.log("Count Updated")
    }, [count])
    // Man übergibt das worauf er hören soll vor der schließenden Klammer als Array.
    // Leeres Arrray = nur beim Laden der Komponente

    return (
        <div>
            <h1>Effect</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount2(count2 + 1)}>+</button>
            {count2}
        </div>
    );
}

export default Effect;
