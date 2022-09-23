import { useState } from "react"
import Button from "../Button/Button"
import Display from "../Display/Display"

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    //const increaseByOne = () => setCounter(counter + 1)
    //const decreaseByOne = () => setCounter(counter - 1)
    //const setToZero = () => setCounter(0)
    const handleClick = (e) => { 
      changeCount(e.target.dataset.delta)}

    const changeCount = (delta) => setCounter(counter + parseInt(delta))
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={handleClick}
          text='plus'
          delta={1}
        />
        <Button
          handleClick={handleClick}
          text='zero'
          delta={-counter}
        />     
        <Button
          handleClick={handleClick}
          text='minus'
          delta={-1}
        />           
      </div>
    )
  }

export default App