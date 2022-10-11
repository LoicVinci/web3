import { useState } from "react"
import Statistics from "../Statistics/Statistics"

const Button = () => {

    const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const handleGoodClick = () => {
        const newClicks = {
            ...clicks,
            good: clicks.good+1,
        }
        setClicks(newClicks)
    }

    const handleNeutralClick = () => {
        const newClicks = {
            ...clicks,
            neutral: clicks.neutral+1,
        }
        setClicks(newClicks)
    }

    const handleBadClick = () => {
        const newClicks = {
            ...clicks,
            bad: clicks.bad+1,
        }
        setClicks(newClicks)
    }

    const all = clicks.good + clicks.neutral + clicks.bad;

    if(all == 0) {
        return (
            <div>
                <h1>give feed back</h1>
                <button onClick={handleGoodClick}>good</button>
                <button onClick={handleNeutralClick}>neutral</button>
                <button onClick={handleBadClick}>bad</button>
                <h1>statistics</h1>
                No feedback given
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>give feed back</h1>
                <button onClick={handleGoodClick}>good</button>
                <button onClick={handleNeutralClick}>neutral</button>
                <button onClick={handleBadClick}>bad</button>
                <h1>statistics</h1>
                good {clicks.good} <br ></br>
                neutral {clicks.neutral} <br ></br>
                bad {clicks.bad} <br ></br>
                <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
            </div>
        )
    }
}

export default Button