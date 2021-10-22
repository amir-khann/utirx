import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button , Result } from 'antd';

const Success = (props) => {
    const dispatch = useDispatch();
    const { stepOne, apiRequest } = useSelector(state => state);
    const goBack = () => {
        dispatch({ type: 'RESET' });
        props.history.push('/');
    }
    return (
        <div className="success">
            <Result 
            status="success"
            title="Successfully submitted a prescription request"
            subTitle={`${stepOne.name}, your prescription request for UTI has been send to the doctor. You will receive an email with confirmation about your request, as well as your payment receipt.
            Doctor will send the prescription to your selected pharmacy.`}
            extra={
                [
                    <p style={{color: "rgba(0,0,0)"}}>{`Here is your confirmation ID:  ${apiRequest.payment.id}`}</p>,
                    <Button type="primary" onClick={() => goBack()}>Go to Homepage</Button>
                ]
            }/>
        </div>
    )
}

export default Success
