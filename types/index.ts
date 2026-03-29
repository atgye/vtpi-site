export type PlanDuration = '1 mois' | '3 mois' | '1 an';

export interface Plan {
  id: string;
  name: string;
  duration: PlanDuration;
  price: number;
  priceLabel: string;
  isPopular?: boolean;
  features: string[];
}

export interface PaymentRequest {
  planId: string;
  phoneNumber: string;
  amount: number;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  message?: string;
  error?: string;
}
