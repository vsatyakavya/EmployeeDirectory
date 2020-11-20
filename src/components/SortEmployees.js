import React from "react";
const styles ={
    space :{
        marginBottom :100
    }
}
function SortEmployees(props){
    return (
 
    <div >
    <label>Sort Employees</label>
    <br />
    <select style ={styles.space}  onChange ={props.sortEmployees}>
        <option   value ="firstName">First name</option>
        <option   value ="lastName">Last Name</option>

        <option   value ="email">Email</option>
        <option   value ="location">Location</option>

    </select>
    </div>

    )
}

export default SortEmployees