const employee = {
    name: "Leissan",
    streetAddress: "Astoria, NY",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  
  const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
  );
  
  newEmployee.name;

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
  
  const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
  
  newEmployee.streetAddress;