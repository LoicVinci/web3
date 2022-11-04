import { useContext } from "react"
import { Context as VotesContext } from "../../contexts/VotesContext"

const ButtonBad = () => {

    const { bad, incrementBad } = useContext(VotesContext)

    return (
      <div>
        Bad : {bad}
        <button onClick={incrementBad}>increase bad</button>
      </div>
    )
  }

export default ButtonBad