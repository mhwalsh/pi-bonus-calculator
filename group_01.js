// -- global data -- //

// employee array = [name, employee number, annual salary, review rating]
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

// function calcBonus takes an employee and
// calculates their bonus and returns a new employee array.
function calcBonus(anEmployee) {

  // marshal variables
  var empName = anEmployee[0];
  var empNumber = anEmployee[1];
  var empSalary = anEmployee [2];
  var empRating = anEmployee[3];

  console.log('empName =', empName);
  console.log('empNumber =', empNumber);
  console.log('empSalary =', empSalary);
  console.log('empRating =', empRating);

  //
}

// -- Main Execution -- //
for (var i = 0; i < employees.length; i++) {
  calcBonus(employees[i]);
}
