import { useState } from 'react';


const FAQ = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <div>
            <div>
                Frage
            <button onClick={() => setIsShown(!isShown)}>+</button>
            </div>
            <div style={{ display: isShown ? 'block' : 'none' }}>
                Antwort
            </div>
        </div>
    );
}

export default FAQ;