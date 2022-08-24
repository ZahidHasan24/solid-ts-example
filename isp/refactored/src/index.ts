import NormalSavingsAccount from "./account/NormalSavingsAccount";
import StudentSavingsAccount from "./account/StudentSavingsAccount";

const normalSavingsAccount = new NormalSavingsAccount(1, "John", 100, "USA");
normalSavingsAccount.creditLocalAmount(100);
normalSavingsAccount.creditInternationalAmount(10);

console.log('Normal Savings Account: ', normalSavingsAccount.getBalance());

const studentSavingsAccount = new StudentSavingsAccount(1, "Doe", 100, "DU");
studentSavingsAccount.creditLocalAmount(100);

console.log('Student Savings Account: ', studentSavingsAccount.getBalance());
