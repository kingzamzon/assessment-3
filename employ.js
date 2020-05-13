let Employee = {
  salary: 60000,
};

let payGrades = {
  entryLevel: {
    taxMultiplier: 0.05,
    benefits: ["health"],
    minSalary: 25000,
    maxSalary: 49999,
  },
  midLevel: {
    taxMultiplier: 0.1,
    benefits: ["health", "housing"],
    minSalary: 50000,
    maxSalary: 99999,
  },
  seniorLevel: {
    taxMultiplier: 0.2,
    benefits: ["health", "housing", "wellness", "gym"],
    minSalary: 100000,
    maxSalary: 200000,
  },
};

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(", ");
}

function calculateBonus() {
  return 0.02 * Employee.salary;
}

function getCadre() {
  if (
    Employee.salary >= payGrades.entryLevel.minSalary &&
    Employee.salary <= payGrades.entryLevel.maxSalary
  ) {
    return "entryLevel";
  } else if (
    Employee.salary >= payGrades.midLevel.minSalary &&
    Employee.salary <= payGrades.midLevel.maxSalary
  ) {
    return "midLevel";
  } else return "seniorLevel";
}

let X = getBenefits();

console.log(X);
