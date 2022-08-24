export default class BaseAccount {
  protected accountId: number;
  protected accountName: string;
  protected balance: number;

  constructor(accountId: number, accountName: string, balance: number) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(balance: number): void {
    this.balance = balance;
  }
}
