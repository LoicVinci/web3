const Button = (props) => {

    const buttonHandler = () => {
        props.change(props.text);
    }

    return (
        <button onClick={buttonHandler}>{props.text}</button>
    )
}

export default Button