import React from 'react'
import useHover from '../hooks/UseHover'

const Mene = () => {
    const [hover,attrs] = useHover()
    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>เมนูหลัก</h3>: null
            }
            <img {...attrs} src= './logo192.png' alt="logo" />
        </div>
    )
}

export default Mene
