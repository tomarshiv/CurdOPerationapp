import React, { useState, useEffect } from 'react'
import '../TodoList/Style.css'
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};


const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [getData, setGetData] = useState(getLocalData())
    const [editData, setEditData] = useState('')
    const [togglebtn, setToggleBtn] = useState(false)





    const addItem = () => {
        if (!inputData) {
            alert('please fill the data')
        }
        else if (inputData && togglebtn) {
            setGetData(
                getData.map((curElem) => {
                    if (curElem.id === editData) {
                        return { ...curElem, name: inputData };
                    }
                    return curElem;
                })
            );


            setInputData("")
            setEditData(null)
            setToggleBtn(false)
        }
        else {

            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }

            console.log('RRR=>', newData)
            setGetData([...getData, newData])
            setInputData('')
        }
    }



    const deleteItem = (index) => {
        const filterdata = getData.filter((currentElement) => {
            return currentElement.id !== index
        })
        setGetData(filterdata)


    }

    const RemoveAll = () => {
        setGetData([])
    }


    const editItem = (index) => {
        const findData = getData.find((curElement) => {
            return curElement.id === index

        })
        setInputData(findData.name)
        setEditData(index)
        setToggleBtn(true)
    }



    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(getData));
    }, [getData]);

    


    return (



        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/book1.jpg' alt='Todologo' />
                        <figcaption>Add your item 🤞</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder='Add Item✍'
                            className='form-control'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {togglebtn ? (
                            <i className='fa fa-edit add-button' onClick={addItem}></i>
                        ) : (
                            <i className='fa fa-plus add-button' onClick={addItem}></i>
                        )}





                        <div className='showItems'>

                            {getData.map((item) => {
                                return (
                                    <>
                                        <div className='eachItem' key={item.id}>
                                            <h1>{item.name}</h1>
                                            <div className='todo-btn'>
                                                <i className='fa fa-edit add-button' onClick={() => editItem(item.id)}></i>
                                                <i className="far fa-trash-alt add-button" onClick={() => deleteItem(item.id)}></i>

                                            </div>
                                        </div>
                                    </>

                                )
                            })}


                        </div>
                        <div className='showItems'>
                            <button className='btn effect04' data-sm-link-text="Remove All  " onClick={RemoveAll}>
                                <span>Check List</span>

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Todo
