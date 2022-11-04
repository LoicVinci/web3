import { useContext } from "react"
import { Context as VotesContext } from "../../contexts/VotesContext"

const ButtonGood = () => {

    const { good, incrementGood } = useContext(VotesContext)

    return (
      <div>
        Good : {good}
        <button onClick={incrementGood}>increase good</button>
      </div>
    )
  }

export default ButtonGood