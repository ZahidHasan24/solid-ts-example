class Customer {
  private fullName: string;
  private phoneNumber: string;

  constructor(fullName: string, phoneNumber: string) {
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
  }

  getFullName(): string {
    return this.fullName;
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
}

export default Customer;
