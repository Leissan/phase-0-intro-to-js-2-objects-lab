const employee = {
    name: "Leissan",
    streetAddress: "Astoria, NY",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  
  
  
  newEmployee.name;

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
  
  const anotherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
  
  anotherEmployee.streetAddress;

  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key){
    const newwEmployee={...employee};
    delete newwEmployee[key];
    return newwEmployee;
  }