import Content from "../Content/Content"
import Header from "../Header/Header"

const Course = (props) => {

    const { course } = props

    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        </div>
    )
}

export default Course