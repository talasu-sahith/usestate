const List = ({arrnames , value , setArrnames})=>{
    console.log(arrnames)
    const handleDelete = (arr)=>{
        setArrnames( arrnames.filter((name) => name.id !== arr.id))
    }
    

    return(
        <div>
            <h2>List</h2>
            {arrnames.map((arr)=>{
                return(<ul key={arr.id}><li>{arr.pass} <button onClick={()=>handleDelete(arr)}>Delete</button></li> </ul>)
            })}
        </div>
    )
}
export default List