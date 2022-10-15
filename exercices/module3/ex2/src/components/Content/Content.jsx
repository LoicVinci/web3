import Part from "../Part/Part"

const Content = (props) => {

    const { parts } = props

    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part.name} exercise={part.exercises} />
        )}
      </div>
    )
  }

  export default Content