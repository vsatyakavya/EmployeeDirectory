import React from "react";

function EmployeeDetail(props) {
  return (
    <tr id={props.emp.email}>
      
      <td>{props.emp.firstName}</td>
      <td>{props.emp.lastName}</td>
      <td>{props.emp.email}</td>
      <td>{props.emp.location}</td>

    </tr>
  );
}

export default EmployeeDetail;
