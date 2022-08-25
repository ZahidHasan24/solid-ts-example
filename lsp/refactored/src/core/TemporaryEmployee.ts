import Employee from "./Employee";
import IEmployeeInsuranceEligible from "./interface/IEmployeeInsuranceEligible";
import IEmployeeBonusEligible from "./interface/IEmployeeBonusEligible";

class TemporaryEmployee
  extends Employee
  implements IEmployeeInsuranceEligible, IEmployeeBonusEligible
{
  constructor(id: number, name: string) {
    super(id, name);
  }

  isEligibleForInsurance(): boolean {
    return false;
  }

  calculateBonus(salary: number): number {
    return salary * 0.05;
  }
}

export default TemporaryEmployee;
