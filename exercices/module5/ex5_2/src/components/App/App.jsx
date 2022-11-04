import { useState } from 'react'
import Form from "../Form/Form"
import Opinion from "../Opinion/Opinion"

const App = () => {

  const [opinions, setOpinions] = useState([])
  const [newSubject, setNewSubject] = useState('')

  const handleSubjectChange = (event) => {
    setNewSubject(event.target.value)
  }

  const addOpinion = (event) => {
    event.preventDefault()

    const opinionObject = {
      subject: newSubject
    }

    setOpinions(opinions.concat(opinionObject))
    setNewSubject('')
  }

  console.log(opinions)
  
    return (
      <div>
        <Opinion/>
        <div>
          <form>
              <input type="text" value={newSubject} onChange={handleSubjectChange}></input>
              <input type="button" value="Add Opinion" onSubmit={addOpinion}></input>
          </form>
        </div>
      </div>
    )
  }

export default App