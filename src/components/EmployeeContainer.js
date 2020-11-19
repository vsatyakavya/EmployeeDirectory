import React , {Component} from "react";
import SearchForm from "./SearchForm"
import EmployeeDetail from "./EmployeeDetail";

import API from "../utils/API";

class EmployeeContainer extends Component {
   state = {
      result :[],
      search :""
   }
 componentDidMount(){
    this.searchEmployees();
 }

searchEmployees = ()=>{
    API.search()
      .then(res => this.setState({ result: res.data.results } )
      ).catch(err => console.log(err));
}
handleInputChange = event=>{
    const {name,value} = event.target;
  this.setState({
      [name] :value
  })
    
}

handleFormSubmit = event =>{
    event.preventDefault();
     this.getOneEmployee(this.state.search)
    //  var a = this.state.search
    // console.log("this is new search value "+a)
    
}

getOneEmployee =(empName)  =>{
    console.log("this i emp---------",empName)
   var employees= this.state.result
   var  searchedEmployee =employees.filter(emp =>emp.name.first ===empName)
    console.log(searchedEmployee);
    if(empName) {
        this.setState({
            result : searchedEmployee
        })
    } else {
        this.setState ({
            result: employees
        })
    }

}


render(){
    var employees = this.state.result;
    
    return (
        <div>
        <SearchForm 
        value = {this.state.search}
        handleInputChange ={this.handleInputChange}
        handleFormSubmit ={this.handleFormSubmit}
        
        />
 <table className="table" >
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>

    </tr>
  </thead>
  <tbody>

  {employees.map(employee => (
    <EmployeeDetail 
    
    emp = {employee} />
   
   ))}
  </tbody>
</table>
</div>
        
      
    )
  }
}
export default EmployeeContainer;
