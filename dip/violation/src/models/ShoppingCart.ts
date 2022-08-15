import Customer from "./Customer";

class ShoppingCart {
  private totalAmount: number;
  private customer: Customer;

  constructor(totalAmount: number, customer: Customer) {
    this.totalAmount = totalAmount;
    this.customer = customer;
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  setTotalAmount(totalAmount: number) {
    this.totalAmount = totalAmount;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }
}

export default ShoppingCart;
