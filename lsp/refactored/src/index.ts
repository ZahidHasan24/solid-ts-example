import ContractEmployee from "./core/ContractEmployee";
import PermanentEmployee from "./core/PermanentEmployee";
import TemporaryEmployee from "./core/TemporaryEmployee";

const employees = [];

employees.push(new PermanentEmployee(1, "John"));
employees.push(new TemporaryEmployee(2, "Doe"));

employees.forEach((employee) => {
  console.log(
    `Employee Id: ${employee.getId()} Employee Name : ${employee.getName()} - Employee Bonus : ${employee.calculateBonus(
      10000
    )}`
  );
});

const employeesOnly = [];

employeesOnly.push(new PermanentEmployee(1, "John"));
employeesOnly.push(new TemporaryEmployee(2, "Doe"));
employeesOnly.push(new ContractEmployee(3, "Mark"));

employeesOnly.forEach((employee) => {
  console.log(
    `Employee Id: ${employee.getId()} Employee Name : ${employee.getName()} - Employee is eligible for Insurance : : ${employee.isEligibleForInsurance()}`
  );
});
