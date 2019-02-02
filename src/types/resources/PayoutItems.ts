import { CursorOptions, CursorResponse, Params } from "../resources";

interface PayoutItemsResponse {
  /** The positive (credit) or negative (debit) value of the item, in fractional currency; the lowest denomination for the currency (e.g. pence in GBP, cents in EUR), to one decimal place.
For accuracy, we store some of our fees to greater precision than we can actually pay out (for example, a GoCardless fee we record might come to 0.5 pence, but it is not possible to send a payout via bank transfer including a half penny).

To calculate the final amount of the payout, we sum all of the items and then round to the nearest currency unit.
   */
  amount: string;

  /**
   * The type of the credit (positive) or debit (negative) item in the payout. One of:
payment_paid_out (credit)

payment_failed (debit): The payment failed to be processed.

payment_charged_back (debit): The payment has been charged back.

payment_refunded (debit): The payment has been refunded to the customer.

refund (debit): private beta A refund sent to a customer, not linked to a payment.

gocardless_fee (credit/debit): The fees that GoCardless charged for a payment. In the case of a payment failure or chargeback, these will appear as credits.

app_fee (credit/debit): The optional fees that a partner may have taken for a payment. In the case of a payment failure or chargeback, these will appear as credits.

revenue_share (credit/debit): A share of the fees that GoCardless collected which some partner integrations receive when their users take payments. Only shown in partner payouts. In the case of a payment failure or chargeback, these will appear as credits.

    */
  type: string;

  links: {
    /** Unique identifier, beginning with “MD”.   */
    mandate: string;

    /** Unique identifier, beginning with “PM”. */
    payment: string;
  };
}

interface ListPayoutItemsRequest extends CursorOptions {
  /** Unique identifier, beginning with “PO”.  */
  payout: string;
}

interface ListPayoutItemsSuccessResponse extends CursorResponse {
  payout_items: PayoutItemsResponse[];
}

interface PayoutItems {
  list: (
    params: ListPayoutItemsRequest & Params<ListPayoutItemsRequest>,
  ) => ListPayoutItemsSuccessResponse;
}

export { ListPayoutItemsRequest, ListPayoutItemsSuccessResponse, PayoutItems };
