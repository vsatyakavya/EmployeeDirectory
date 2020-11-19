import React from "react";

function SearchForm(props){
    return (
      <form>
          <div className="form-group">
              <label htmlFor = "search">Search By Employee FirstName</label>
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
                <button onClick ={props.handleFormSubmit} className = "btn btn-success">Submit</button>
          </div>
      </form>
    )
}

export default SearchForm