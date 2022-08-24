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
}

export default StudentSavingsAccount;
