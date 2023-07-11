// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  console.log(employee);
  // your logic here
  let bonusPercentage =0;

  //- IF rating is <= 2 , no bonus
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  //- IF rating is == 3, bonus = 4
  if (employee.reviewRating == 3) {
    bonusPercentage = 4;
  }
  //- IF rating is == 4, bonus = 6 
  if (employee.reviewRating == 4) {
    bonusPercentage = 6;
  }
  //- IF rating is == 5, bonus = 10
  if (employee.reviewRating == 5) {
    bonusPercentage == 10;
  }
  //- IF employee.number.length = 4, bonus +5
  if(employee.employeeNumber.length == 4) {
    bonusPercentage += 5;
  }
  //- IF income > $65,000, bonus -1
  if(employee.annualSalary > 65000) {
    bonusPercentage -= 1;
  }
  //- IF bonus > 13, bonus = 13
  if (bonusPercentage > 13){
    bonusPercentage = 13;
  }
  //- IF bonus < 0, bonus = 0
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
// The name property should contain the employee's name.
//The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
//The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
//The totalBonus should be the employee's total bonus rounded to the nearest dollar.
  
  // return new object with bonus results
  let result = {
    something: "yay",
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: 'total compensation - TBD',
    totalBonus: 'total bonus - TBD',

  }
  return result
}

// Testing for all employees
for(let individual of employees) {
  console.log(`%c${individual.name}`, 'color: black; background: yellow;');
  calculateIndividualEmployeeBonus(individual);
}