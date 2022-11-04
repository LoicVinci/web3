import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)
    
    const incrementGood = () => {
        setGood(good + 1)    
    }

    const incrementOk = () => {
        setOk(ok + 1)    
    }

    const incrementBad = () => {
        setBad(bad + 1)    
    }

    const reset = () => {
        setGood(0)
        setOk(0)
        setBad(0)
    }
    
    const exposedValue = {
        good,
        incrementGood,
        ok,
        incrementOk,
        bad,
        incrementBad,
        reset
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}
