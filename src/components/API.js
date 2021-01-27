// class  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     compontentDidMount() {
//         fetch()
//     }
//     render() { 
//         return (  );
//     }
// }

// export default ;
import { useState, useEffect } from 'react';


const API = () => {
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setIsLoading(false)
            })
    }, [])
    return (
        <div>
            {isLoading ? "Loading" : JSON.stringify(data)}
        </div>
    );
}

export default API;