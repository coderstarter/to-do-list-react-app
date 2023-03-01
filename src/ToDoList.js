import React from 'react';
import { useState } from 'react';
function ToDoList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity() {
        // setListData([...listData, activity]);
        // console.log(listData)
        setListData((listData) => {
            const updatedList = [...listData, activity];
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elm, id) => {
            return i !== id;
        })
        setListData(updatedListData);
    }
    function removeAll() {
        setListData([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>To Do List</div>
                <input type="text" placeholder="Add activity" value={activity} onChange={(e) => {
                    setActivity(e.target.value)
                }} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'>Here is your List:</p>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <span>
                                    <div className='listData'>{data}</div>
                                    <div className='btn-position'>
                                        <button onClick={() => removeActivity(i)}>remove(-)</button>
                                    </div>
                                </span>
                            </p>
                        </>
                    )
                })
                }
                {listData.length >= 1 && <button onClick={removeAll}>Remove all tasks</button>}
            </div>
        </>

    )
}
export default ToDoList