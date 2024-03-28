import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todoSlices/todoSlices';

function AddTodo() {
    const [inputvalue, setinput] = useState("");
    const dispatch = useDispatch();
    function HandleSubmit(e) {
        e.preventDefault()
        // console.log("Hello world");
        dispatch(addTodo(inputvalue))
        // console.log(inputvalue);
        setinput("");
    }
    return (
        <div>
            <form onSubmit={HandleSubmit} >
                <input
                    value={inputvalue}
                    placeholder='enter Value'
                    type='text'
                    onChange={(e) => setinput(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
