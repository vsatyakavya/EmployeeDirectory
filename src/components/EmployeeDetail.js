import React from "react";

function EmployeeDetail(props) {
  return (
    <tr id={props.emp.email}>
      
      <td>{props.emp.name.first}</td>
      <td>{props.emp.name.last}</td>
      <td>{props.emp.email}</td>
      <td>{props.emp.location.city}</td>

    </tr>
  );
}

export default EmployeeDetail;
