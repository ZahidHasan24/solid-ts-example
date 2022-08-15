import SmsProvider from "./sms/SmsProvider";

class SmsService {
  private smsProvider: SmsProvider;

  constructor(smsProvider: SmsProvider) {
    this.smsProvider = smsProvider;
  }

  sendSms(text: string, phoneNumber: string) {
    this.smsProvider.sendSms(phoneNumber, text);
  }
}

export default SmsService;
