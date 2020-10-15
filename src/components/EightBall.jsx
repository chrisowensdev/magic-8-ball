import React, { useState } from "react";
import Answer from './Answer';

const EightBall = props => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const _handleChange = (question) => {
        setQuestion(question);
    };

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
        const response = await fetch(url);
        const data = await response.json();
        setAnswer(data.magic.answer);
    }

    const _handleClick = () => {
        setQuestion("");
        setAnswer("");
    }

    return (
        <>
        <h1>Magic Eight Ball</h1>
        <form onSubmit={(event) => _handleSubmit(event)}>
            <label>
                What is your question??
                <input 
                    type="text" 
                    value={question} onChange={(event) => _handleChange(event.target.value)}/>
            </label>
            <button type="submit">Ask the Magic 8 Ball</button>
        </form>
        <form>
        <button type="click" onClick={_handleClick}>Reset</button>
        </form>
        <Answer answer={answer} />
        </>
    )
}

export default EightBall;