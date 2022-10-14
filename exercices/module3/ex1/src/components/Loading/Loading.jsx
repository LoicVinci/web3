import { useState } from "react"
import App from "../App/App"

const Loading = () => {
    
    const [loading, setLoadings] = useState(true)
    setTimeout(3)

    setTimeout(() => setLoadings(false), 3000);

    if(loading) {
        return (
            <p>Loading ...</p>
        )
    }
    else {
        return (
            <div><App /></div>
        )
    }
}

export default Loading