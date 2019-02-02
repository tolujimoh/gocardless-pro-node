import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreatePaymentsRequest {
  /**
   *   Amount, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  amount: string;

  /**
   *   ISO 4217 currency code. Currently “AUD”, “CAD”, “DKK”, “EUR”, “GBP”, “NZD” and “SEK” are supported.
   */
  currency: string;

  /**
   *   The amount to be deducted from the payment as the OAuth app’s fee, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  app_fee?: string;

  /**
   *   A future date on which the payment should be collected. If not specified, the payment will be collected as soon as possible. This must be on or after the mandate’s next_possible_charge_date, and will be rolled-forwards by GoCardless if it is not a working day.
   */
  charge_date?: string;

  /**
   *   A human-readable description of the payment. This will be included in the notification email GoCardless sends to your customer if your organisation does not send its own notifications (see compliance requirements).
   */
  description?: string;

  /**
   *   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: string;

  /**
   *   An optional payment reference that will appear on your customer’s bank statement. For Bacs payments this can be up to 10 characters, for SEPA payments the limit is 140 characters, for Autogiro payments the limit is 11 characters, for Betalingsservice or BECS payments the limit is 30 characters and for BECS NZ or PAD the limit is 12 characters.

   Restricted: You can only specify a payment reference for Bacs payments (that is, when collecting from the UK) if you’re on the GoCardless Plus or Pro packages.
   */
  reference?: string;
  links: {
    /**
     *   ID of the mandate against which this payment should be collected.
     */
    mandate: string;
  };
}

interface ListPaymentsRequest extends CursorOptions {
  /** ID of a creditor to filter payments by. If you pass this parameter, you cannot also pass customer.

   */
  creditor?: string;

  /** ISO 4217 currency code. Currently “AUD”, “CAD”, “DKK”, “EUR”, “GBP”, “NZD” and “SEK” are supported.

   */
  currency?: string;

  /** ID of a customer to filter payments by. If you pass this parameter, you cannot also pass creditor.
   */
  customer?: string;

  /** Unique identifier, beginning with “MD”.   */
  mandate?: string;

  /** One of:
pending_customer_approval: we’re waiting for the customer to approve this payment

pending_submission: the payment has been created, but not yet submitted to the banks

submitted: the payment has been submitted to the banks

confirmed: the payment has been confirmed as collected

paid_out: the payment has been included in a payout

cancelled: the payment has been cancelled

customer_approval_denied: the customer has denied approval for the payment. You should contact the customer directly

failed: the payment failed to be processed. Note that payments can fail after being confirmed if the failure message is sent late by the banks.

charged_back: the payment has been charged back
   */
  status?: string;

  /** Unique identifier, beginning with “SB”.  */
  subscription?: string;
}

interface PaymentsResponse {
  /** Unique identifier, beginning with “PM”. */
  id: string;

  /** Amount, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */

  amount: string;

  /** Amount refunded, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */

  amount_refunded: string;

  /** A future date on which the payment should be collected. If not specified, the payment will be collected as soon as possible. This must be on or after the mandate’s next_possible_charge_date, and will be rolled-forwards by GoCardless if it is not a working day.
   */
  charge_date: string;

  /** Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /** ISO 4217 currency code. Currently “AUD”, “CAD”, “DKK”, “EUR”, “GBP”, “NZD” and “SEK” are supported.
   */

  currency: string;

  /** A human-readable description of the payment. This will be included in the notification email GoCardless sends to your customer if your organisation does not send its own notifications (see compliance requirements).
   */

  description: string;

  /** Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */

  metadata: Object;

  /** An optional payment reference that will appear on your customer’s bank statement. For Bacs payments this can be up to 10 characters, for SEPA payments the limit is 140 characters, for Autogiro payments the limit is 11 characters, for Betalingsservice or BECS payments the limit is 30 characters and for BECS NZ or PAD the limit is 12 characters.

  Restricted: You can only specify a payment reference for Bacs payments (that is, when collecting from the UK) if you’re on the GoCardless Plus or Pro packages.
 */

  reference: string;

  /** One of:
  pending_customer_approval: we’re waiting for the customer to approve this payment

  pending_submission: the payment has been created, but not yet submitted to the banks

  submitted: the payment has been submitted to the banks

  confirmed: the payment has been confirmed as collected

  paid_out: the payment has been included in a payout

  cancelled: the payment has been cancelled

  customer_approval_denied: the customer has denied approval for the payment. You should contact the customer directly

  failed: the payment failed to be processed. Note that payments can fail after being confirmed if the failure message is sent late by the banks.

  charged_back: the payment has been charged back
 */

  status: string;

  link: {
    /** ID of creditor to which the collected payment will be sent.
     */
    creditor: string;

    /** ID of the mandate against which this payment should be collected.
     */

    mandate: string;

    /** ID of payout which contains the funds from this payment.
  Note: this property will not be present until the payment has been successfully collected.
 */

    payout: string;

    /** ID of subscription from which this payment was created.
  Note: this property will only be present if this payment is part of a subscription.
 */

    subscription: string;
  };
}

interface UpdatePaymentsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CancelPaymentsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface RetryPaymentsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CreatePaymentsSuccessResponse {
  payments: PaymentsResponse;
}

interface GetPaymentsSuccessResponse {
  payments: PaymentsResponse;
}

interface ListPaymentsSuccessResponse extends CursorResponse {
  payments: PaymentsResponse[];
}

interface UpdatePaymentsSuccessResponse {
  payments: PaymentsResponse;
}

interface CancelPaymentsSuccessResponse {
  payments: PaymentsResponse;
}

interface RetryPaymentsSuccessResponse {
  payments: PaymentsResponse;
}

interface Payments {
  create: (
    params: CreatePaymentsRequest & Params<CreatePaymentsRequest>,
  ) => CreatePaymentsSuccessResponse;
  list: (
    params: ListPaymentsRequest & Params<ListPaymentsRequest>,
  ) => ListPaymentsSuccessResponse;
  update: (
    resourceId: string,
    params: UpdatePaymentsRequest & Params<UpdatePaymentsRequest>,
  ) => UpdatePaymentsSuccessResponse;
  cancel: (
    resourceId: string,
    params: CancelPaymentsRequest & Params<CancelPaymentsRequest>,
  ) => CancelPaymentsSuccessResponse;
  retry: (
    resourceId: string,
    params: RetryPaymentsRequest & Params<RetryPaymentsRequest>,
  ) => RetryPaymentsSuccessResponse;
  get: (resourceId: string) => GetPaymentsSuccessResponse;
}

export {
  CreatePaymentsRequest,
  ListPaymentsRequest,
  UpdatePaymentsRequest,
  UpdatePaymentsSuccessResponse,
  CreatePaymentsSuccessResponse,
  GetPaymentsSuccessResponse,
  ListPaymentsSuccessResponse,
  CancelPaymentsRequest,
  CancelPaymentsSuccessResponse,
  RetryPaymentsRequest,
  RetryPaymentsSuccessResponse,
  Payments,
};
