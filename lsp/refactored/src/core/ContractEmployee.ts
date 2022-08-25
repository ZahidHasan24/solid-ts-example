import Employee from "./Employee";
import IEmployeeInsuranceEligible from "./interface/IEmployeeInsuranceEligible";

class ContractEmployee extends Employee implements IEmployeeInsuranceEligible {
  constructor(id: number, name: string) {
    super(id, name);
  }

  isEligibleForInsurance(): boolean {
    return false;
  }
}

export default ContractEmployee;
