import React from 'react'

const Center = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: 'auto'}}>
            {props.children}
        </div>
    )
}

export default Center
