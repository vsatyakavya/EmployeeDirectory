import React from "react";
const styles ={
    space :{
        marginBottom :100
    }
}
function SortEmployees(props){
    return (
    //   <form>
    //       <div className="form-group">
    //           <label htmlFor = "sort">Sort Employees</label>
    //           <input
    //           value = {props.value}
    //           name = "sort"
    //           onChange = {props.handleInputChange}
    //           type ="text"
    //           className="form-control"
    //           placeholder ="Sort employee"
    //           id ="search"
    //            />
    //             <br />
    
    //             <button  onClick ={props.sortEmployees} className = "btn btn-success btn-md">Sort Employees</button>
    //             <button  onClick ={props.sortEmployees} className = "btn btn-success btn-md">Sort Employees</button>
                
    //           </div>  
    //  </form>
    <div >
    <label>Sort Employees</label>
    <select style ={styles.space}  onChange ={props.sortEmployees}>
        <option   value ="firstName">First name</option>
        <option   value ="lastName">Last Name</option>

        <option   value ="email">Email</option>
        <option   value ="location">Location</option>

    </select>
    </div>
        //             <button  onClick ={props.sortEmployees} className = "btn btn-success btn-md">Sort Employees</button>

    )
}

export default SortEmployees