import React from 'react';
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const employees = ['John Doe', 'Jane Smith', 'Mike Johnson'];

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
