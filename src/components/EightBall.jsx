import React, { useState } from "react";

const EightBall = props => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const _handleChange = (question) => {
        setQuestion(question);
    }

    return (
        <>
        <h1>Magic Eight Ball</h1>
        <form>
            <label>
                What is your question??
                <input type="text" value={question} onChange={(event) => _handleChange(event.target.value)}/>
            </label>
            <button type="submit">Ask the Magic 8 Ball</button>
        </form>
        {!!answer ? (
            <p>Magic 8 Ball Says: {answer} </p>
        ) : (null)}
        </>
    )
}

export default EightBall;