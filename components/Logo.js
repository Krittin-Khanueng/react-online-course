import React from 'react'
import { logo } from '../styles/style'
import useHover from '../hooks/UseHover'

const Logo = () => {
    const [hover,attrs] = useHover()
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            {
                hover ? <p>Hello Logo</p> : null 
            }
           <img {...attrs} style={logo}  src={logoImage.url} width="`100" alt="logo" />
        </div>
    )
}

export default Logo
