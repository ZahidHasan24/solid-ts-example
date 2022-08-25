import Employee from "./Employee";

class ContractEmployee extends Employee {
  constructor(id: number, name: string) {
    super(id, name);
  }

  isEligibleForInsurance(): boolean {
    return false;
  }

  calculateBonus(salary: number): number {
    throw new Error("Not implemented");
  }
}

export default ContractEmployee;
