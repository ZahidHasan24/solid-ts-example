import Employee from "./Employee";

class PermanentEmployee extends Employee {
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
