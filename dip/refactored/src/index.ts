import Customer from "./models/Customer";
import ShoppingCart from "./models/ShoppingCart";
import CheckoutService from "./services/CheckoutService";
import GpSmsProvider from "./services/sms/GpSmsProvider";
import RobiSmsProvider from "./services/sms/RobiSmsProvider";
import SmsService from "./services/smsService";

const customer = new Customer("John Doe", "0123456789");
const shoppingCart = new ShoppingCart(1200, customer);
// const smsProvider = new GpSmsProvider();
const smsProvider = new RobiSmsProvider();
const smsService = new SmsService(smsProvider);
const checkoutService = new CheckoutService(smsService);
checkoutService.checkout(shoppingCart);
