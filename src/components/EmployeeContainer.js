import React , {Component} from "react";
// import API from "../utils.API";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
   state = {
      result :[]
   }
 componentDidMount(){
    this.searchEmployees();
 }

searchEmployees = ()=>{
    API.search()
      .then(res => this.setState({ result: res.data.results } )
      )
         
         
      .catch(err => console.log(err));
}


render(){
    var employees = this.state.result;
    
    return (
        
            
       
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
    
    emp = {employee}
    
    
    
    />
    // <tr>
    //   <td>{employee.index}</td>
    //   <td>{employee.name.first}</td>
    //   <td>{employee.name.last}</td>
    //   <td>{employee.email}</td>
    //   <td>{employee.location.city}</td>

    // </tr>
   ))}
  </tbody>
</table>
        
      
    )
  }
}
export default EmployeeContainer;
