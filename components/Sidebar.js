import React from 'react'
import reactDom from 'react-dom'

const Sidebar = () => {
    // let fullname = 'John'
    const [fullname, setFullname] = React.useState('John')
    const [isShow, setIsShow] = React.useState(true)
    const changName = () => {
        setFullname('Mary')
        setIsShow(!isShow)
    }

    React.useEffect (() => {

        console.log('sidebar userEffect')
    })

    React.useEffect (() => {

        console.log('sidebar userEffect on time only')
    },[])

    React.useEffect (() => {

        console.log('sidebar userEffect =>'+ fullname)
    },[fullname])

    return (
        <>
            <h3>Sidebar</h3>
            {
                isShow ? <p>Hello</p> : <p> World</p>
            }
            <p>
                สวัสดี {fullname}
            </p>
            <button onClick={changName} >เปลี่ยนชื่อ</button>
        </>
    )
}

export default Sidebar
