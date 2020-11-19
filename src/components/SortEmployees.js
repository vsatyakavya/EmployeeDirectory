import React from "react";

function SortEmployees(props){
    return (
      <form>
          <div className="form-group">
              <label htmlFor = "sort">Sort Employees</label>
              <input
              value = {props.value}
              name = "sort"
              onChange = {props.handleInputChange}
              type ="text"
              className="form-control"
              placeholder ="Sort employee"
              id ="search"
               />
                <br />
    
                <button  onClick ={props.sortEmployees} className = "btn btn-success btn-md">Sort Employees</button>
              </div>  
     </form>
    )
}

export default SortEmployees