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
    return (
        <ul className="list-group">
        {employees.map(employee => (
            
          <li className="list-group-item" key={employee.email}>
            {employee.gender}
            
           </li>
        ))}
      </ul>
    )
  }
}
export default EmployeeContainer;
