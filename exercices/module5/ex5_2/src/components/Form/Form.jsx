const Form = (props) => {
    
    //Récuper les props pour utiliser les fonctions de App et mettre à jour la liste d'opinions
    const {addOption, handleSubjectChange, newSubject} = props

    return (
      <div>
          <form>
              <input type="text" value={newSubject} onChange={handleSubjectChange}></input>
              <input type="button" value="Add Opinion" onSubmit={addOption}></input>
          </form>
      </div>
    )
  }

export default Form