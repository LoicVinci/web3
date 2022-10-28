import { useState, useEffect } from 'react'
import personService from '../../services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    let alreadyExist = false

    persons.forEach(person => {if(person.name === newName) {
      alert(`${newName} is already added to phonebook`)
      alreadyExist = true
    }});

    if(!alreadyExist) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
          phone: <input 
                  value={newNumber}
                  onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App