import ContractEmployee from "./core/ContractEmployee";
import PermanentEmployee from "./core/PermanentEmployee";
import TemporaryEmployee from "./core/TemporaryEmployee";

const employees = [];

employees.push(new PermanentEmployee(1, "John"));
employees.push(new TemporaryEmployee(2, "Doe"));
employees.push(new ContractEmployee(3, "Mark"));

employees.forEach((employee) => {
  console.log(
    `Employee Id: ${employee.getId()} Employee Name : ${employee.getName()} - Employee is eligible for Insurance : ${employee.isEligibleForInsurance()}`
  );
});

employees.forEach((employee) => {
  try {
    console.log(
      `Employee Id: ${employee.getId()} Employee Name : ${employee.getName()} - Employee Bonus : ${employee.calculateBonus(
        10000
      )}`
    );
  } catch (error) {
    console.log("This employee is not eligible for bonus");
  }
});
