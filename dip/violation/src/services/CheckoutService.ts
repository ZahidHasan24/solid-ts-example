import ShoppingCart from "../models/ShoppingCart";
import SmsService from "./smsService";

class CheckoutService {
  private smsService: SmsService;
  constructor() {
    this.smsService = new SmsService();
  }

  sendConfirmationSms(shoppingCart: ShoppingCart) {
    const message =
      "Thank you, " +
      shoppingCart.getCustomer().getFullName() +
      " for shopping at our store." +
      "\nYour order of total BDT " +
      shoppingCart.getTotalAmount() +
      " has been confirmed.";

    this.smsService.sendSms(
      message,
      shoppingCart.getCustomer().getPhoneNumber()
    );
  }

  checkout(shoppingCart: ShoppingCart) {
    // do some other stuff here
    console.log("Checking out " + shoppingCart.getCustomer().getFullName());
    // send sms
    this.sendConfirmationSms(shoppingCart);
  }
}

export default CheckoutService;