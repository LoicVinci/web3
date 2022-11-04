import { useContext } from "react"
import { Context as VotesContext } from "../../contexts/VotesContext"

const ResetButton = () => {

    const { reset } = useContext(VotesContext) 

    return (
      <div>
        <button onClick={reset}>Reset scores</button>
      </div>
    )
  }

export default ResetButton