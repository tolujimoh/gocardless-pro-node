import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateManadatesRequest {
  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /**
   *   Unique reference. Different schemes have different length and character set requirements. GoCardless will generate a unique reference satisfying the different scheme requirements if this field is left blank.
   */
  reference?: string;

  /**
   *   Direct Debit scheme to which this mandate and associated payments are submitted. Can be supplied or automatically detected from the customer’s bank account.
   */
  scheme?: string;

  links: {
    /**
     * ID of the associated creditor.
     */
    creditor?: string;

    /**
     * ID of the associated customer bank account which the mandate is created and submits payments against.

     */
    customer_bank_account: string;
  };
}

interface ListManadatesRequest extends CursorOptions {
  /** ID of a creditor. If specified, this endpoint will return all mandates for the given creditor. Cannot be used in conjunction with customer or customer_bank_account

   */
  creditor?: string;

  /** ID of a customer. If specified, this endpoint will return all mandates for the given customer. Cannot be used in conjunction with customer_bank_account or creditor

   */
  customer?: string;

  /** ID of a customer bank account. If specified, this endpoint will return all mandates for the given bank account. Cannot be used in conjunction with customer or creditor

   */
  customer_bank_account?: string;

  /** Unique reference. Different schemes have different length and character set requirements. GoCardless will generate a unique reference satisfying the different scheme requirements if this field is left blank.
   */
  reference?: string;

  /** At most four valid status values
   */
  status?: string;
}

interface ManadatesResponse {
  /**
   * Unique identifier, beginning with “MD”.
   */
  id: string;

  /**
   *   Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata: Object;

  /**
   * The earliest date a newly created payment for this mandate could be charged.
   */
  next_possible_charge_date: string;

  /**
   *   Boolean value showing whether payments and subscriptions under this mandate require approval via an automated email before being processed.
   */
  payments_require_approval: boolean;

  /**
   *   Unique reference. Different schemes have different length and character set requirements. GoCardless will generate a unique reference satisfying the different scheme requirements if this field is left blank.
   */
  reference: string;

  /**
   *   Direct Debit scheme to which this mandate and associated payments are submitted. Can be supplied or automatically detected from the customer’s bank account.
   */
  scheme: string;

  /**
   *   ISO 4217 currency code, defaults to national currency of country_code.
   */
  currency: string;

  /**
   *   One of:
pending_customer_approval: the mandate has not yet been signed by the second customer

pending_submission: the mandate has not yet been submitted to the customer’s bank

submitted: the mandate has been submitted to the customer’s bank but has not been processed yet

active: the mandate has been successfully set up by the customer’s bank

failed: the mandate could not be created

cancelled: the mandate has been cancelled

expired: the mandate has expired due to dormancy
   */
  status: string;

  links: {
    /**
     * ID of the associated creditor.
     */
    creditor: string;

    /**
     * ID of the associated customer
     */
    customer: string;

    /**
     * ID of the associated customer bank account which the mandate is created and submits payments against.

     */
    customer_bank_account: string;

    /**
     * ID of the new mandate if this mandate has been replaced.
     */
    new_mandate: string;
  };
}

interface UpdateManadatesRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CancelManadatesRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface ReinstateManadatesRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CreateManadatesSuccessResponse {
  manadates: ManadatesResponse;
}

interface GetManadatesSuccessResponse {
  manadates: ManadatesResponse;
}

interface CancelManadatesSuccessResponse {
  manadates: ManadatesResponse;
}

interface ReinstateManadatesSuccessResponse {
  manadates: ManadatesResponse;
}

interface ListManadatesSuccessResponse extends CursorResponse {
  manadates: ManadatesResponse[];
}

interface UpdateManadatesSuccessResponse {
  manadates: ManadatesResponse;
}

interface Manadates {
  create: (
    params: CreateManadatesRequest & Params<CreateManadatesRequest>,
  ) => CreateManadatesSuccessResponse;
  list: (
    params: ListManadatesRequest & Params<ListManadatesRequest>,
  ) => ListManadatesSuccessResponse;
  cancel: (
    resourceId: string,
    params: CancelManadatesRequest & Params<CancelManadatesRequest>,
  ) => CancelManadatesSuccessResponse;
  reinstate: (
    resourceId: string,
    params: ReinstateManadatesRequest & Params<ReinstateManadatesRequest>,
  ) => ReinstateManadatesSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateManadatesRequest & Params<UpdateManadatesRequest>,
  ) => UpdateManadatesSuccessResponse;
  get: (resourceId: string) => GetManadatesSuccessResponse;
}

export {
  CreateManadatesRequest,
  ListManadatesRequest,
  UpdateManadatesRequest,
  CancelManadatesRequest,
  ReinstateManadatesRequest,
  ReinstateManadatesSuccessResponse,
  UpdateManadatesSuccessResponse,
  CreateManadatesSuccessResponse,
  GetManadatesSuccessResponse,
  CancelManadatesSuccessResponse,
  ListManadatesSuccessResponse,
  Manadates,
};
