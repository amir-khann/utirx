import React from 'react'
import { Button, Space } from 'antd';

const Question = (props) => {
    const handleButtonClick = (answer) => {
        if(answer.success){
            props.incrementIndex(props.question._id, answer.answer);
        } else {
            props.redirect.push('/error');
        }
    }
    return (
        <div className={"question"}>
            <p>{props.question.question}</p>
            <Space style={{float: 'right'}}>
                {props.question.answers.map((answer, index) => {
                    return (<Button key={index.toString()} onClick={()=>handleButtonClick(answer)} type={answer.answer === 'Yes' ? 'primary' : 'default'}>{answer.answer}</Button>)
                })}
            </Space>

        </div>
    )
}

export default Question
