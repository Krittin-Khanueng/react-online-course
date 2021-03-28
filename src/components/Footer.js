import React from 'react'

const Footer = ({title, website, postcode, isOpen}) => {
    //const {title, website, postcode} = props;
    return (
        <div>
            <h3>{title} &copy; {new Date().getFullYear()}</h3>
            <p>{website} {postcode} isOpen:{isOpen.toString()}</p>
        </div>
    )
}

export default Footer
