import React from 'react'
import { Button , Result } from 'antd';

const Success = (props) => {
    return (
        <Result 
            status="success"
            title="Successfully submitted a prescription request"
            extra={
                [
                    <Button type="primary" onClick={() => props.history.push('/')}>Go to Homepage</Button>
                ]
            }/>
    )
}

export default Success
