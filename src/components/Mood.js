import { Cat } from 'react-kawaii';

import { useState } from 'react';

const Mood = () => {
    const random255 = () => Math.floor(Math.random() * 255)
    const randomColor = () => setColor(`rgba(${random255()},${random255()},${random255()}, ${Math.random()})`)
    const moodArray = ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]
    const [mood, setMood] = useState(moodArray[Math.floor(Math.random() * moodArray.length)])
    const [color, setColor] = useState(`rgba(${random255()},${random255()},${random255()}, ${Math.random()})`)
    const randomMood = () => setMood(moodArray[Math.floor(Math.random() * moodArray.length)])
    return (
        <div>
            <Cat size={200} mood={mood} color={color} />
            <button onClick={() => { randomColor(); randomMood() }}>Random</button>
        </div>
    );
}

export default Mood;