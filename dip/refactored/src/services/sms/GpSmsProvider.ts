import SmsProvider from "./SmsProvider";

class GpSmsProvider implements SmsProvider {
  sendSms(text: string, phoneNumber: string) {
    console.log("Sending SMS via GP:");
    console.log("----> Receiver: " + phoneNumber);
    console.log("----> Text:\n" + text);
  }
}

export default GpSmsProvider;