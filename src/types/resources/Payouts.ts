import { CursorOptions, CursorResponse, Params } from "../resources";

interface PayoutsResponse {
  /**
   * Unique identifier, beginning with “PO”.
   */
  id: string;

  /**
   * Amount in pence or cents.
   */
  amount: string;

  /**
   * Date the payout is due to arrive in the creditor’s bank account. One of:
yyyy-mm-dd: the payout has been paid and is due to arrive in the creditor’s bank account on this day

null: the payout hasn’t been paid yet

   */
  arrival_date: string;

  /**
   * Fixed timestamp, recording when this resource was created.

   */
  created_at: string;

  /**
   * ISO 4217 currency code. Currently “AUD”, “CAD”, “DKK”, “EUR”, “GBP”, “NZD” and “SEK” are supported.
   */
  currency: string;

  /**
   * Fees that have already been deducted from the payout amount in pence or cents.

   For each late_failure_settled or chargeback_settled action, we refund the transaction fees in a payout. This means that a payout can have a negative deducted_fees. This field is calculated as GoCardless fees + app fees - refunded fees

If the merchant is invoiced for fees separately from the payout, then deducted_fees will be 0.
   */
  deducted_fees: string;

  /**
   * Whether a payout contains merchant revenue or partner fees.
   */
  payout_type: string;

  /**
   Reference which appears on the creditor’s bank statement.
   */
  reference: string;

  /**
   * One of:
pending: the payout has been created, but not yet sent to the banks

paid: the payout has been sent to the banks
   */
  status: string;
  links: {
    /**
     * ID of creditor who will receive this payout, i.e. the owner of the creditor_bank_account.     */
    creditor: string;

    /**
     * ID of bank account which this will be sent to.
     */
    creditor_bank_account: string;
  };
}

interface ListPayoutsRequest extends CursorOptions {
  /** Unique identifier, beginning with “CR”.   */
  creditor?: string;
  /** Unique identifier, beginning with “BA”.
   */
  creditor_bank_account?: string;
  /** ISO 4217 currency code. Currently “AUD”, “CAD”, “DKK”, “EUR”, “GBP”, “NZD” and “SEK” are supported.
   */
  currency?: string;
  /** Whether a payout contains merchant revenue or partner fees.
   */
  payout_type?: string;

  /**  Reference which appears on the creditor’s bank statement.
   */
  reference?: string;

  /** One of:
  pending: the payout has been created, but not yet sent to the banks

  paid: the payout has been sent to the banks

   */
  status?: string;
}

interface ListPayoutsSuccessResponse extends CursorResponse {
  payouts: PayoutsResponse[];
}

interface GetPayoutsSuccessResponse extends CursorResponse {
  payouts: PayoutsResponse;
}

interface Payouts {
  list: (
    params: ListPayoutsRequest  |  Params<ListPayoutsRequest>,
  ) => ListPayoutsSuccessResponse;
  get: (resourceId: string) => GetPayoutsSuccessResponse;
}

export {
  GetPayoutsSuccessResponse,
  ListPayoutsRequest,
  ListPayoutsSuccessResponse,
  Payouts,
};
