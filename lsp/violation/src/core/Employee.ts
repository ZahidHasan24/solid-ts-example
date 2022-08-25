abstract class Employee {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  abstract calculateBonus(salary: number): number;
  abstract isEligibleForInsurance(): boolean;
}

export default Employee;
