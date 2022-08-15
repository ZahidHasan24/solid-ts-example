import Customer from "./models/Customer";
import ShoppingCart from "./models/ShoppingCart";
import CheckoutService from "./services/CheckoutService";

const customer = new Customer("John Doe", "0123456789");
const shoppingCart = new ShoppingCart(1200, customer);
const checkoutService = new CheckoutService();
checkoutService.checkout(shoppingCart);
