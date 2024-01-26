import { useState } from "react"
import List from "./List"
import { nanoid } from "nanoid"

const Input = ()=>{
    const [value,setValue] = useState("")

    const [arrnames, setArrnames] = useState([{id:12345 , pass: "qwe" },{id: 678 , pass:"qwer"}])
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleAdd = ()=>{
        if(value!=""){
        setArrnames([...arrnames,{id: nanoid(),pass: value}])
        // setArrnames([...arrnames, value].sort((a, b) => a - b ))
        setValue("")}
        else return
    }

    return(
        <div>
            <h1>Input</h1>
            <input type="text" placeholder="Enter Name" value={value} onChange={(c)=>handleChange(c)}/>
            <button onClick={handleAdd}> Add </button>
            <p>{value}</p>
            <List arrnames = {arrnames} value = {value} setArrnames = {setArrnames}/>
        </div>

    )
}
export default Input