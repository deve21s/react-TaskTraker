import React from 'react'
import Button from './Button'


export const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
            <Button color={showAdd ? "red" : "green"} text={showAdd ? 'Close' : 'Open' } onClick={onAdd} />
        </header>
    )
}
// for heder props
Header.defaultPrps = {
    title : 'Task Tracker'
}
//for heder style
const headerStyle = {
    color : "red",
    backgroundColor : "black"
}

export default Header;