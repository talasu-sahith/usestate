import { useState } from "react"

const Counter=() => {
    const [count , setCount] = useState(0)
    const handleAdd = () => {
        setCount((previousValue) => previousValue+ 1)
        // setCount((count) => count+ 1)
        // setCount((count) => count+ 1)
        // setCount((count) => count+ 1)
        // setCount((count) => count+ 1)

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 2)
    }


    return(
        <div>
        <div>Counter</div>
        <button onClick={handleAdd}>{count}</button>
        </div>
    )
}
export default Counter