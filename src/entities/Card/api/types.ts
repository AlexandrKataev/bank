export type PaymentSystem = 'visa' | 'mastercard' | 'mir';

export interface Card {
  id: number;
  userId: number;
  cardNumber: string;
  balance: number;
  paymentSystem: PaymentSystem;
  cvv: number;
  pin: number;
}

export interface CreateCardDto {
  userId: number;

  paymentSystem: PaymentSystem;
}
