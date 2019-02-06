import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateSubscriptionsRequest {
  /** Amount in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  amount: number;

  /** ISO 4217 currency code. Currently GBP, EUR, SEK, and DKK are supported.
   */
  currency: string;

  /** The unit of time between customer charge dates. One of weekly, monthly or yearly.
   */
  interval_unit: string;

  /** The amount to be deducted from each payment as an app fee, to be paid to the partner integration which created the subscription, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  app_fee?: string;

  /** The total number of payments that should be taken by this subscription.   */
  count?: string;

  /** As per RFC 2445. The day of the month to charge customers on. 1-28 or -1 to indicate the last day of the month.
   */
  day_of_month?: string;

  /** Date on or after which no further payments should be created. If this field is blank and count is not specified, the subscription will continue forever.

  Deprecated: This field will be removed in a future API version. Use count to specify a number of payments instead.
 */
  end_date?: string;

  /** Number of interval_units between customer charge dates. Must be greater than or equal to 1. Must result in at least one charge date per year. Defaults to 1.
   */
  interval?: string;

  /** Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /** Name of the month on which to charge a customer. Must be lowercase.
   */
  month?: string;

  /** Optional name for the subscription. This will be set as the description on each payment created. Must not exceed 255 characters.
   */
  name?: string;

  /** An optional payment reference. This will be set as the reference on each payment created and will appear on your customer’s bank statement. See the documentation for the create payment endpoint for more details.

  Restricted: You need your own Service User Number to specify a payment reference for Bacs payments.
 */
  payment_reference?: string;

  /** The date on which the first payment should be charged. Must be on or after the mandate’s next_possible_charge_date. When blank, this will be set as the mandate’s next_possible_charge_date.
   */
  start_date?: string;

  links: {
    /** ID of the associated mandate which the subscription will create payments against.
     */
    mandate: string;
  };
}

interface ListSubscriptionsRequest extends CursorOptions {
  /** Unique identifier, beginning with “CU”.

   */
  customer?: string;

  /** Unique identifier, beginning with “MD”.

    */
  mandate?: string;

  /** At most four valid status values
   */
  status?: string;
}

interface SubscriptionsResponse {
  /** Unique identifier, beginning with “SB”. */
  id: string;

  /** Amount in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  amount: number;

  /** The amount to be deducted from each payment as an app fee, to be paid to the partner integration which created the subscription, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  app_fee: string;

  /** Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /** ISO 4217 currency code. Currently GBP, EUR, SEK, and DKK are supported.
   */
  currency: string;

  /** As per RFC 2445. The day of the month to charge customers on. 1-28 or -1 to indicate the last day of the month.
   */
  day_of_month: string;

  /** Date on or after which no further payments should be created. If this field is blank and count is not specified, the subscription will continue forever.

  Deprecated: This field will be removed in a future API version. Use count to specify a number of payments instead.
 */
  end_date: string;

  /** Number of interval_units between customer charge dates. Must be greater than or equal to 1. Must result in at least one charge date per year. Defaults to 1.
   */
  interval: string;

  /** The unit of time between customer charge dates. One of weekly, monthly or yearly.
   */
  interval_unit: string;

  /** Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata: Object;

  /** Name of the month on which to charge a customer. Must be lowercase.
   */
  month: string;

  /** Optional name for the subscription. This will be set as the description on each payment created. Must not exceed 255 characters.
   */
  name: string;

  /** An optional payment reference. This will be set as the reference on each payment created and will appear on your customer’s bank statement. See the documentation for the create payment endpoint for more details.

  Restricted: You need your own Service User Number to specify a payment reference for Bacs payments.
 */
  payment_reference: string;

  /** The date on which the first payment should be charged. Must be on or after the mandate’s next_possible_charge_date. When blank, this will be set as the mandate’s next_possible_charge_date.
   */
  start_date: string;
  /** One of:
pending_customer_approval: the subscription is waiting for customer approval before becoming active

customer_approval_denied: the customer did not approve the subscription

active: the subscription is currently active and will continue to create payments

finished: all of the payments scheduled for creation under this subscription have been created

cancelled: the subscription has been cancelled and will no longer create payments
 */
  status: string;

  /**
 *
 * Up to 10 upcoming payments with the amount, in pence, and charge date for each.
Each instance will contain these properties:

  amount: The amount of this payment, in pence.

charge_date: The date on which this payment will be charged.
 */
  upcoming_payments: Array<{ charge_date: string; amount: number }>;

  links: {
    /** ID of the associated mandate which the subscription will create payments against.
     */
    mandate: string;
  };
}

interface UpdateSubscriptionsRequest {
  /**
   Amount in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  amount?: string;

  /**
   The amount to be deducted from each payment as an app fee, to be paid to the partner integration which created the subscription, in the lowest denomination for the currency (e.g. pence in GBP, cents in EUR).
   */
  app_fee?: string;

  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /**
   Optional name for the subscription. This will be set as the description on each payment created. Must not exceed 255 characters.
   */
  name?: string;

  /**
   An optional payment reference. This will be set as the reference on each payment created and will appear on your customer’s bank statement. See the documentation for the create payment endpoint for more details.

   Restricted: You need your own Service User Number to specify a payment reference for Bacs payments.
   */
  payment_reference?: string;
}

interface CancelSubscriptionsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CreateSubscriptionsSuccessResponse {
  subscriptions: SubscriptionsResponse;
}

interface GetSubscriptionsSuccessResponse {
  subscriptions: SubscriptionsResponse;
}

interface ListSubscriptionsSuccessResponse extends CursorResponse {
  subscriptions: SubscriptionsResponse[];
}

interface UpdateSubscriptionsSuccessResponse {
  subscriptions: SubscriptionsResponse;
}

interface CancelSubscriptionsSuccessResponse {
  subscriptions: SubscriptionsResponse;
}

interface Subscriptions {
  create: (
    params: CreateSubscriptionsRequest  |  Params<CreateSubscriptionsRequest>,
  ) => CreateSubscriptionsSuccessResponse;
  list: (
    params: ListSubscriptionsRequest  |  Params<ListSubscriptionsRequest>,
  ) => ListSubscriptionsSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateSubscriptionsRequest  |  Params<UpdateSubscriptionsRequest>,
  ) => UpdateSubscriptionsSuccessResponse;
  cancel: (
    resourceId: string,
    params: CancelSubscriptionsRequest  |  Params<CancelSubscriptionsRequest>,
  ) => CancelSubscriptionsSuccessResponse;
  get: (resourceId: string) => GetSubscriptionsSuccessResponse;
}

export {
  CreateSubscriptionsRequest,
  CreateSubscriptionsSuccessResponse,
  ListSubscriptionsRequest,
  ListSubscriptionsSuccessResponse,
  UpdateSubscriptionsRequest,
  UpdateSubscriptionsSuccessResponse,
  CancelSubscriptionsRequest,
  CancelSubscriptionsSuccessResponse,
  GetSubscriptionsSuccessResponse,
  Subscriptions,
};
