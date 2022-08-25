import Employee from "./Employee";

class TemporaryEmployee extends Employee {
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
