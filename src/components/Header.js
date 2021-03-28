import React from 'react'
import Logo from './Logo'

const Header = () => {
    let companyName = 'CCT';
    const companyAddress = <p>Ubon</p>
    let num = 10
    const showMessage = () => {
        return companyName + '.com'
    };

    const isLogin = false;
    const showMe= () =>{
        alert('Hello React')
    }

    return (
        <>
            <h1>บริษัท {companyName}</h1>
            <hr />
            {companyAddress}
            {num + 100} <br/>
            {showMessage()}
            {isLogin && (
                <>
                    <p>ยินดีต้อนรับ</p>
                    <p>ยินดีต้อนรับ2</p>
                </>
            )}  
            {
                isLogin ? <Logo />:<p>แกไม่มีสิทธิ์</p>
            }
            <br />
            <button onClick={showMe}>Click me</button>
            <hr />
        </>
    )
}

export default Header
