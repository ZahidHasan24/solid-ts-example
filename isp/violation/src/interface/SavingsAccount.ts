export default interface SavingsAccount {
  getBalance(): number;
  creditLocalAmount(amountInLocal: number): void;
  creditInternationalAmount(amountInUsd: number): void;
}
