const Statistics = (props) => {

    const good = props.good;
    const neutral = props.neutral;
    const bad = props.bad;

    return(
        <>
            all {good + neutral + bad}<br></br>
            average {(good*1 + neutral*0 + bad*-1) / (good+neutral+bad)}<br></br>
            positive {good / (good+neutral+bad)}
        </>
    )
}

export default Statistics