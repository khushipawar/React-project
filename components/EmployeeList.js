import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <ul>
      {employees.map((employee, index) => (
        <li key={index}>{employee}</li>
      ))}
    </ul>
  );
};

export default EmployeeList;
