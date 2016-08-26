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
  var empSalary = Number(anEmployee [2]);
  var empRating = anEmployee[3];

  console.log('processing,', empName);

  var bonusPercent; // in decimal
  //employee rating bonus calcuation
  switch (empRating) {
    case 0:
    case 1:
    case 2:
      // 2 or below - no bonus
      bonusPercent = 0.0;
      break;
    case 3:
      bonusPercent = 0.04;
      break;
    case 4:
      bonusPercent = 0.06;
      break;
    case 5:
      bonusPercent = 0.10;
      break;
    default:
      console.log('Not a valid rating!');
      bonusPercent = 0.0;
  }

  // employee number is 4 digits, recieve addition 5%
  if(empNumber.length <= 4){
    bonusPercent += 0.05;
  }

  //if annual income is greater than 65000
  if(empSalary >= 65000){
    bonusPercent -= 0.01;
  }

  console.log('bonusPercent = ', bonusPercent);

}

// -- Main Execution -- //
for (var i = 0; i < employees.length; i++) {
  calcBonus(employees[i]);
}
