import React from 'react'
import "./style.css"

const NavBar = ({ uniqueList, handleClick }) => {
    console.log('uniqueList',uniqueList)
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>

                {uniqueList?.map((item) => {
                    console.log('itemmmmmmm',item)
                    return(

                        <button className='btn-group__item' onClick={() => handleClick(item)}>{item}</button>
                    )


                    })}
                </div>
            </nav>
        </>
    )
}

export default NavBar
