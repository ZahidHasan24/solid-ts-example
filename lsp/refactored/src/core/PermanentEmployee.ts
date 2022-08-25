import Employee from "./Employee";
import IEmployeeInsuranceEligible from "./interface/IEmployeeInsuranceEligible";
import IEmployeeBonusEligible from "./interface/IEmployeeBonusEligible";

class PermanentEmployee
  extends Employee
  implements IEmployeeInsuranceEligible, IEmployeeBonusEligible
{
  constructor(id: number, name: string) {
    super(id, name);
  }

  isEligibleForInsurance(): boolean {
    return true;
  }

  calculateBonus(salary: number): number {
    return salary * 0.1;
  }
}

export default PermanentEmployee;
