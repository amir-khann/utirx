import React from 'react'

const Container = (props) => {
    return (
        <div style={{width: '70%', margin: '0 auto 0 auto', minHeight: '100vh'}}>
            {props.children}
        </div>
    )
}

export default Container
