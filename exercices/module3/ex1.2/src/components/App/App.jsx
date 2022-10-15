import { useState } from "react"
import Statistics from "../Statistics/Statistics"
import StatisticLine from "../StatisticLine/StatisticLine"
import Button from "../Button/Button"

const App = () => {
    
    const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const changeButton = (text) => {
        const newClicks = {
            ...clicks
        }
        if(text==='good') {
            newClicks.good = newClicks.good +1
        }
        else if(text==='bad') {
            newClicks.bad = newClicks.bad +1
        }
        else if(text==='neutral') {
            newClicks.neutral = newClicks.neutral +1
        }
        setClicks(newClicks)
    }

    const all = clicks.good + clicks.neutral + clicks.bad;

    if(all === 0) {
        return (
            <div>
                <h1>give feed back</h1>
                <Button text="good" change={changeButton}/>
                <Button text="neutral" change={changeButton}/>
                <Button text="bad" change={changeButton}/>
                <h1>statistics</h1>
                No feedback given
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>give feed back</h1>
                <Button text="good" change={changeButton}/>
                <Button text="neutral" change={changeButton}/>
                <Button text="bad" change={changeButton}/>
                <h1>statistics</h1>
                <StatisticLine text="good" value ={clicks.good} />
                <StatisticLine text="neutral" value ={clicks.neutral} />
                <StatisticLine text="bad" value ={clicks.bad} />
                <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
            </div>
        )
    }
}

export default App