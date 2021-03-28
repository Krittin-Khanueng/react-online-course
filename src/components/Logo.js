import React from 'react'
import { logo } from '../styles/style'
const Logo = () => {
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
           <img style={logo}  src={logoImage.url} width="`100" alt="logo" />
        </div>
    )
}

export default Logo
