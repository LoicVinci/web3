import Content from "../Content/Content"
import Header from "../Header/Header"
import Total from "../Total/Total"

const Course = (props) => {

    const { course } = props

    let total = 0;
    course.parts.map(part=>
        total+=part.exercices)
    //TODO 2.2 Ajouter total

    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={total} />
        </div>
    )
}

export default Course