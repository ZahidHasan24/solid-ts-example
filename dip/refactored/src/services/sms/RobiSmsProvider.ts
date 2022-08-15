import SmsProvider from "./SmsProvider";

class RobiSmsProvider implements SmsProvider {
  sendSms(text: string, phoneNumber: string) {
    console.log("Sending SMS via Robi:");
    console.log("----> Receiver: " + phoneNumber);
    console.log("----> Text:\n" + text);
  }
}

export default RobiSmsProvider;