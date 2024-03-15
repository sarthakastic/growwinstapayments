export function maskCardNumber(cardNumber: string) {
  const firstPart = cardNumber.substring(0, 4);

  const maskedPart = "********".substring(0, 8);

  const maskedNumber = firstPart + maskedPart;

  return maskedNumber;
}
