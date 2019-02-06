import { CursorOptions, CursorResponse, Params } from "../resources";

interface SchemeIdentifiers {
  /** The name which appears on customers’ bank statements. */
  name: string;

  /** The scheme which this scheme identifier applies to. */
  scheme: string;

  /** The scheme-unique identifier against which payments are submitted. */
  reference: string;

  /** The minimum interval, in working days, between the sending of a pre-notification to the customer, and the charge date of a payment using this scheme identifier. */
  minimum_advance_notice: number;

  /** The currency of the scheme identifier. */
  currency: string;

  /** The first line of the support address. */
  address_line1: string;

  /** The second line of the support address. */
  address_line2: string;

  /** The third line of the support address. */
  address_line3: string;

  /** The city of the support address. */
  city: string;

  /** The support address region, county or department. */
  region: string;

  /** The support postal code. */
  postal_code: string;

  /** The support ISO 3166-1 country code. */
  country_code: string;

  /** The support email address. */
  email: string;

  /** The support phone number. */
  phone_number: string;

  /** Whether a custom reference can be submitted for mandates using this scheme identifier. */
  can_specify_mandate_reference: boolean;
}

interface CreateCreditorRequest {
  /**  The creditor’s name. */
  name: string;

  /**  The first line of the creditor’s address. */
  address_line1?: string;

  /**  The second line of the creditor’s address. */
  address_line2?: string;

  /**  The third line of the creditor’s address. */
  address_line3?: string;

  /**  The city of the creditor’s address. */
  city?: string;

  /**  ISO 3166-1 alpha-2 code. */
  country_code?: string;

  /**  The creditor’s postal code. */
  postal_code?: string;

  /**  The creditor’s address region, county or department. */
  region?: string;
}

interface UpdateCreditorRequest {
  /** The creditor’s name.
   */
  name: string;

  /** The first line of the creditor’s address.
   */
  address_line1?: string;

  /** The second line of the creditor’s address.
   */

  address_line2?: string;

  /** The third line of the creditor’s address.
   */

  address_line3?: string;

  /** The city of the creditor’s address.
   */
  city?: string;

  /** ISO 3166-1 alpha-2 code.
   */
  country_code?: string;

  /** The creditor’s postal code.
   */
  postal_code?: string;

  /** The creditor’s address region, county or department.
   */

  region?: string;
  links?: {
    /** ID of the bank account which is set up to receive payouts in AUD. */
    default_aud_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in DKK. */
    default_dkk_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in EUR. */
    default_eur_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in GBP. */
    default_gbp_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in NZD. */
    default_nzd_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in SEK. */
    default_sek_payout_account?: string;
  };
}

interface CreditorsResponse {
  /** Unique identifier, beginning with “CR”.
   */
  id: string;

  /**  Fixed timestamp, recording when this resource was created.
   */

  created_at: string;

  /** The creditor’s name.
   */

  name: string;

  /**  The first line of the creditor’s address.
   */

  address_line1: string;

  /**  The second line of the creditor’s address.
   */

  address_line2: string;

  /** The third line of the creditor’s address.
   */

  address_line3: string;

  /** The city of the creditor’s address.
   */

  city: string;

  /** The creditor’s address region, county or department.
   */

  region: string;

  /**  The creditor’s postal code.
   */

  postal_code: string;

  /** ISO 3166-1 alpha-2 code.
   */

  country_code: string;

  /** URL for the creditor’s logo, which may be shown on their payment pages.
   */

  logo_url: string;

  /** The creditor’s verification status, indicating whether they can yet receive payouts. For more details on handling verification as a partner, see our “Helping your users get verified” guide. One of:
 ** successful: The creditor’s account is fully verified, and they can receive payouts. Once a creditor has been successfully verified, they may in the future require further verification - for example, if they change their payout bank account, we will have to check that they own the new bank account before they can receive payouts again.

 ** in_review: The creditor has provided all of the information currently requested, and it is awaiting review by GoCardless before they can be verified and receive payouts.

 ** action_required: The creditor needs to provide further information to verify their account so they can receive payouts, and should visit the verification flow.
 */
  verification_status: string;

  /**  Boolean indicating whether the creditor is permitted to create refunds
   */
  can_create_refunds: boolean;

  /** An array of the scheme identifiers this creditor can create mandates against.
The support address, phone_number and email fields are for customers to contact the merchant for support purposes. They must be displayed on the payment page, please see our [compliance requirements]{@link https://developer.gocardless.com/api-reference/#appendix-compliance-requirements} for more details. */
  scheme_identifiers: SchemeIdentifiers[];
  links?: {
    /** ID of the bank account which is set up to receive payouts in AUD. */
    default_aud_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in DKK. */
    default_dkk_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in EUR. */
    default_eur_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in GBP. */
    default_gbp_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in NZD. */
    default_nzd_payout_account?: string;

    /** ID of the bank account which is set up to receive payouts in SEK. */
    default_sek_payout_account?: string;
  };
}

interface CreateCreditorSuccessResponse {
  creditors: CreditorsResponse;
}

interface GetCreditorSuccessResponse {
  creditors: CreditorsResponse;
}

interface UpdateCreditorSuccessResponse {
  creditors: CreditorsResponse;
}

interface ListCreditorSuccessResponse extends CursorResponse {
  creditors: CreditorsResponse[];
}

interface Creditors {
  create: (
    params: CreateCreditorRequest  |  Params<CreateCreditorRequest>,
  ) => CreateCreditorSuccessResponse;
  list: (
    params: CursorOptions  |  Params<CursorOptions>,
  ) => ListCreditorSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateCreditorRequest  |  Params<UpdateCreditorRequest>,
  ) => UpdateCreditorSuccessResponse;
  get: (resourceId: string) => GetCreditorSuccessResponse;
}

export {
  CreateCreditorRequest,
  UpdateCreditorRequest,
  CreateCreditorSuccessResponse,
  GetCreditorSuccessResponse,
  UpdateCreditorSuccessResponse,
  ListCreditorSuccessResponse,
  Creditors,
};
