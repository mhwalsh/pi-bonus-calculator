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
  var empRating = Number(anEmployee[3]);

  console.log('Processing', empName);

  var bonusPercent; // in decimal
  //employee rating bonus calcuation

  if(empRating <= 2){
    bonusPercent = 0.0;

  }else if (empRating === 3) {
    bonusPercent = 0.04;

  }else if (empRating === 4) {
    bonusPercent = 0.06;

  }else if (empRating === 5) {
    bonusPercent = 0.10;
    
  }else {
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

  //if final percentage is greater than 13%, reduce to 13%
  if(bonusPercent > 0.13){
      bonusPercent = 0.13;
  }

  //calculate bonus
  var bonus = Math.round(empSalary * bonusPercent);
  var adjustedSalary = empSalary + bonus;

  //[name, percent bonus, adjustedSalary, total bonus rounded]
  var bonusPercentFormatted = bonusPercent.toLocaleString('percent', {style: 'percent'});

  var newEmpArr = [empName, bonusPercentFormatted, toUsd(adjustedSalary), toUsd(bonus)];

  return newEmpArr;
}

//helper function to formate dollar amount
function toUsd(dollarAmount){
  return dollarAmount.toLocaleString('USD', {style: 'currency', currency: 'USD'});
}

// -- Main Execution -- //
for (var i = 0; i < employees.length; i++) {
  console.log(calcBonus(employees[i]));
}
