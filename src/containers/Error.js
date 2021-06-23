import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <p>Error! We cannot proceed with your request. <Link to="/request">Go back and Try again.</Link></p>
        </div>
    )
}

export default Error
