import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateRefundsRequest {
  /**
   *   Amount in pence/cents/öre.
   */
  amount: number;

  /**
   *   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /**
   *   An optional refund reference, displayed on your customer’s bank statement. This can be up to 18 characters long for Bacs or BECS payments, 140 characters for SEPA payments, or 25 characters for Autogiro payments.
   */
  reference?: string;

  /**
   *   Total expected refunded amount in pence/cents/öre. If there are other partial refunds against this payment, this value should be the sum of the existing refunds plus the amount of the refund being created.   */
  total_amount_confirmation?: number;

  links?: {
    /**
     *   ID of the mandate against which the refund is being made.
     */
    mandate?: string;

    /**
   *   ID of the payment against which the refund is being made.

   */
    payment?: string;
  };
}

interface ListRefundsRequest extends CursorOptions {
  /** Unique identifier, beginning with “MD”.

   */
  mandate?: string;

  /** Unique identifier, beginning with “PM”.

   */
  payment?: string;

  /** Whether a refund was issued against a mandate or a payment. One of:
payment: default returns refunds created against payments only

mandate: returns refunds created against mandates onl

   */
  refund_type?: string;
}

interface RefundsResponse {
  /**
   *   Unique identifier, beginning with “RF”.
   */
  id: string;

  /**
   *   Amount in pence/cents/öre.
   */
  amount: number;

  /**
   *   Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   *   ISO 4217 currency code. This is set to the currency of the refund’s payment.
   */
  currency: string;

  /**
   *   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata: Object;

  /**
   *   An optional refund reference, displayed on your customer’s bank statement. This can be up to 18 characters long for Bacs or BECS payments, 140 characters for SEPA payments, or 25 characters for Autogiro payments.
   */
  reference: string;

  links: {
    /**
     *   ID of the mandate against which the refund is being made.
     */
    mandate: string;

    /**
   *   ID of the payment against which the refund is being made.

   */
    payment: string;
  };
}

interface UpdateRefundsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CreateRefundsSuccessResponse {
  refunds: RefundsResponse;
}

interface GetRefundsSuccessResponse {
  refunds: RefundsResponse;
}

interface ListRefundsSuccessResponse extends CursorResponse {
  refunds: RefundsResponse[];
}

interface UpdateRefundsSuccessResponse {
  refunds: RefundsResponse;
}

interface Refunds {
  create: (
    params: CreateRefundsRequest  |  Params<CreateRefundsRequest>,
  ) => CreateRefundsSuccessResponse;
  list: (
    params: ListRefundsRequest  |  Params<ListRefundsRequest>,
  ) => ListRefundsSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateRefundsRequest  |  Params<UpdateRefundsRequest>,
  ) => UpdateRefundsSuccessResponse;
  get: (resourceId: string) => GetRefundsSuccessResponse;
}

export {
  CreateRefundsRequest,
  CreateRefundsSuccessResponse,
  ListRefundsRequest,
  ListRefundsSuccessResponse,
  UpdateRefundsRequest,
  UpdateRefundsSuccessResponse,
  GetRefundsSuccessResponse,
  Refunds,
};
