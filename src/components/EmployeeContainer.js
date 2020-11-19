import React , {Component} from "react";
// import API from "../utils.API";
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
    var i =0 ;
    return (
        
            
        //   <li className="list-group-item" key={employee.email}>
        //     {employee.gender}
            
        //    </li>
        <table class="table" >
  <thead class="thead-dark">
    <tr>
      
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>

    </tr>
  </thead>
  <tbody>

  {employees.map(employee => (

    <tr>
      <td>{employee.index}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.location.city}</td>

    </tr>
   ))}
  </tbody>
</table>
        
      
    )
  }
}
export default EmployeeContainer;
