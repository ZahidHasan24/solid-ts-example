import SavingsAccount from "../interface/SavingsAccount";
import BaseAccount from "./BaseAccount";

class NormalSavingsAccount extends BaseAccount implements SavingsAccount {
  private primarySourceCountry: string;

  constructor(
    accountId: number,
    accountName: string,
    balance: number,
    primarySourceCountry: string
  ) {
    super(accountId, accountName, balance);
    this.primarySourceCountry = primarySourceCountry;
  }

  getBalance(): number {
    return this.balance;
  }

  creditLocalAmount(amountInLocal: number): void {
    this.balance += amountInLocal;
  }

  creditInternationalAmount(amountInUsd: number): void {
    const amount = amountInUsd * 95;
    const incentive = amount * 0.02;
    this.balance += amount + incentive;
  }
}

export default NormalSavingsAccount;
