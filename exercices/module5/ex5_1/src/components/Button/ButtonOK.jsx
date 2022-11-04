import { useContext } from "react"
import { Context as VotesContext } from "../../contexts/VotesContext"

const ButtonOK = () => {

    const { ok, incrementOk } = useContext(VotesContext)

    return (
      <div>
        Ok : {ok}
        <button onClick={incrementOk}>increase ok</button>
      </div>
    )
  }

export default ButtonOK