import React from "react";

const styles={
test:{
    color :"white"
}
}
function SearchForm(props){
    return (
      <form style ={styles.test}>
          <div className="form-group">
              <label  htmlFor = "search">Search employee by name</label>
              <input   
              value = {props.value}
              name = "search"
              onChange = {props.handleInputChange}
              type ="text"
              className="form-control"
              placeholder ="Search for employee"
              id ="search"
               />
                <br />
                <div class="text-center">
                <button  onClick ={props.handleFormSubmit} className = "btn btn-success large">Submit</button>
                </div>
          </div>
      </form>
    )
}

export default SearchForm