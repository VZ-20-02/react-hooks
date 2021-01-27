import { useState } from 'react';

const Previous = () => {
    const [inputs, setInputs] = useState({
        firstName: "", age: ""
    })
    const handleInputs = (event) => {
        // console.log(event)
        // if (event.target.name === "firstName") {
        //     // console.log(event.target.value)
        //     setInputs(previousState => {
        //         console.log(previousState);
        //         return {
        //             ...previousState,
        //             name: event.target.value
        //         }
        //     })
        // } else if (event.target.name === "age") {
        //     setInputs(previousState => {
        //         return {
        //             ...previousState,
        //             age: event.target.value
        //         }
        //     })
        // }
        setInputs(previousState => {
            return {
                ...previousState,
                // der Text des name-Attributs in unserem HTML muss in diesem Fall mit dem key in unserem Objekt übereinstimmen!
                [event.target.name]: event.target.value
            }
        })
    }
    return (<>
        <form>
            Name:
            <input type="text" name="firstName" onChange={event => handleInputs(event)} />
            <br />
            Age:
            <input type="text" name="age" onChange={event => handleInputs(event)} />
            <p>{inputs.firstName}</p>
            <p>{inputs.age}</p>
        </form>
    </>);
}

export default Previous;