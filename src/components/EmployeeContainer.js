import React , {Component} from "react";
import SearchForm from "./SearchForm";
import SortEmployees from "./SortEmployees";
import EmployeeDetail from "./EmployeeDetail";
import Container from "./Container";

import API from "../utils/API";

class EmployeeContainer extends Component {
   state = {
      result :[],
      search :"",
      sort : "",
      originalData :[],
      message : "No employees with this first name"
   }
 componentDidMount(){
    this.searchEmployees();
 }

searchEmployees = ()=>{
    API.search()
      .then(res => 
        {
          let mappedEmployees = res.data.results.map(data => ({
            firstName : data.name.first,
            lastName : data.name.last,
            location : data.location.city,
            email : data.email
          }))
          this.setState({ result: mappedEmployees,
            originalData : mappedEmployees} 
            )

        }
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
    
}

getOneEmployee =(empName)  =>{
    console.log("this i emp---------",empName)
   var employees= this.state.originalData

  var  searchedEmployee =employees.filter(emp =>(emp.firstName.toLowerCase()+" "+emp.lastName.toLowerCase()).includes(empName.toLowerCase()))

    console.log(searchedEmployee);
    if(searchedEmployee.length === 0){

    }
    if(empName) {
        this.setState({
            result : searchedEmployee
        })
    }
    
 
    else {
        this.setState ({
            result: this.state.originalData
        })
    }

}

sortEmployees = event =>{
  event.preventDefault();

  var colName = event.target.value;
  console.log("this is colName" + colName);
  var orgData = this.state.originalData;
  console.log(orgData);

 orgData.sort((a, b) => (a[colName] > b[colName]) ? 1 : -1)
 console.log(orgData);
   this.setState({
     result : orgData
   })
}

render(){
    var employees = this.state.result;
    
    return (
     
        <div>
        <Container>
        
       
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

        

        
              

        

 <table className="table text-white text large table-hover " >
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
</Container>
</div>

        
      
    )
  }
}
export default EmployeeContainer;
