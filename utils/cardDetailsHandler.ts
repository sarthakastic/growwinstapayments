export function maskCardNumber(cardNumber: string) {
  const visibleDigits = 4;
  const totalDigits = cardNumber.length;

  if (totalDigits <= visibleDigits) {
    return cardNumber;
  }

  const maskedPart = "*".repeat(totalDigits - visibleDigits);

  const visiblePart = cardNumber.substring(totalDigits - visibleDigits);

  return maskedPart + visiblePart;
}
