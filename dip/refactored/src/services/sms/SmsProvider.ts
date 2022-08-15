export default interface SmsProvider {
  sendSms(phoneNumber: string, text: string): void;
}
