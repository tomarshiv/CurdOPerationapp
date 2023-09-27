import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import Cart from './cart'
import NavBar from './navBar'



const uniqueData = [...new Set(Menu.map((item) => {
    return (item.category)
})

),
    "All"
]
console.log(uniqueData)





const Restaurant = () => {
    // const myStyle={color:'green'}
    const [menuData, setMenuData] = useState(Menu)
    const [uniqueList, setUniqueList] = useState(uniqueData)
    // console.log('sachin', uniqueData);




    const handleClick = (Category) => {
        if (Category == 'All') {
            setMenuData(Menu)
            return;

        }

        const updateData = Menu.filter((currentElement) => {
            return currentElement.category === Category
        })
          setMenuData(updateData)

    }


    return (
        <>

            <NavBar uniqueList={uniqueList} handleClick={handleClick} />
            <Cart menuData={menuData} />
        </>


    )
}

export default Restaurant
