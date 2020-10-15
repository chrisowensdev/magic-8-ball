import React from 'react';
import styled from 'styled-components';

const BigEight = styled.div`
    color: #fff;
    font-size: 16rem;
`;

const EightBallAnswer = styled.div`
    font-weight: bold;
    
    .answerText {
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 50%;
        background-color: #000;
        height: 500px;
        width: 500px;

        .answerDice {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            color: #000;
            height: 175px;
            width: 175px;
            border-radius: 50%;
            animation: fadeIn ease 2s;
            

            @keyframes fadeIn {
                0% {
                    background-color: purple;
                    opacity: 0;
                }
                100% {
                    background-color: white;
                    opacity: 1;
                }
            }
        }
    }
`;

const Answer = props => {
    return (
        <EightBallAnswer>
            Magic 8 Ball Says: 
            <div className="answerText">
                {!!props.answer ? (<div className="answerDice">
                    {props.answer}
                </div>): <BigEight>8</BigEight>} 
            </div>
        </EightBallAnswer>
    )
}

export default Answer;