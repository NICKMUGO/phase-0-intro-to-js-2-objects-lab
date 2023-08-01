// Write your solution in this file!
let employee={
    employeename:"John Muthiora",
    streetAddress:"Moi Avenue",
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const updatedEmployee = {...employee};
    updatedEmployee[key]=value
    return updatedEmployee
}
updatedEmployee=updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "Kimathi Street"
)
console.log(updatedEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
employee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"employeename", "Andrew Kihara");
console.log(employee);
function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key]
    return updatedEmployee 
}
updatedEmployee=deleteFromEmployeeByKey(employee,"Sam")
console.log(updatedEmployee);
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee 
}
employee=destructivelyDeleteFromEmployeeByKey(employee,"streetAddress")
