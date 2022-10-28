import ButtonBad from "../Button/ButtonBad"
import ButtonGood from "../Button/ButtonGood"
import ButtonOK from "../Button/ButtonOK"
import ResetButton from "../Button/ResetButton"

const App = () => {
  
    return (
      <div>
        <ul>
            <li><ButtonGood /></li>
            <li><ButtonOK /></li>
            <li><ButtonBad /></li>
        </ul>
        <ResetButton />
      </div>
    )
  }

export default App