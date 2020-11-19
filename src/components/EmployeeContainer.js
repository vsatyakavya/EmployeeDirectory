import React , {Component} from "react";
import SearchForm from "./SearchForm";
import SortEmployees from "./SortEmployees";
import EmployeeDetail from "./EmployeeDetail";

import API from "../utils/API";

class EmployeeContainer extends Component {
   state = {
      result :[],
      search :"",
      sort : "",
      originalData :[]
   }
 componentDidMount(){
    this.searchEmployees();
 }

searchEmployees = ()=>{
    API.search()
      .then(res => this.setState({ result: res.data.results ,
        originalData : res.data.results} 
     )
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
   var  searchedEmployee =employees.filter(emp =>emp.name.first.toLowerCase() ===empName.toLowerCase())
    console.log(searchedEmployee);
    if(empName) {
        this.setState({
            result : searchedEmployee
        })
    } else {
        this.setState ({
            result: this.state.originalData
        })
    }

}

sortEmployees = event =>{
  event.preventDefault();
  var colName = this.state.sort;
  console.log("this is colName" + colName);
  var orgData = this.state.originalData;
  console.log(orgData);

 orgData.sort((a, b) => (a.email > b.email) ? 1 : -1)
 console.log(orgData);
   this.setState({
     result : orgData
   })
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
        <SortEmployees 
        value = {this.state.sort}
        handleInputChange ={this.handleInputChange}
         sortEmployees = {this.sortEmployees}
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
