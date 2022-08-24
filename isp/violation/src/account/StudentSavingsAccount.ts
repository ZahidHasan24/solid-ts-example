import SavingsAccount from "../interface/SavingsAccount";
import BaseAccount from "./BaseAccount";

class StudentSavingsAccount extends BaseAccount implements SavingsAccount {
  private instituteName: string;

  constructor(
    accountId: number,
    accountName: string,
    balance: number,
    instituteName: string
  ) {
    super(accountId, accountName, balance);
    this.instituteName = instituteName;
  }

  creditLocalAmount(amountInLocal: number): void {
    this.balance += amountInLocal;
  }

  creditInternationalAmount(amountInUsd: number): void {
    throw new Error(
      "International amount transfer is not applicable for student account"
    );
  }
}

export default StudentSavingsAccount;
