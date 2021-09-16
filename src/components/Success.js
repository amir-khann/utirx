import React from 'react'
import { useDispatch } from 'react-redux';
import { Button , Result } from 'antd';

const Success = (props) => {
    const dispatch = useDispatch();
    const goBack = () => {
        dispatch({ type: 'RESET' });
        props.history.push('/');
    }
    return (
        <Result 
            status="success"
            title="Successfully submitted a prescription request"
            extra={
                [
                    <Button type="primary" onClick={() => goBack()}>Go to Homepage</Button>
                ]
            }/>
    )
}

export default Success
