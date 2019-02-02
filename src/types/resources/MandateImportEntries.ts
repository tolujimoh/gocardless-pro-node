import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateMandateImportEntriesRequest {
  bank_account: {
    /** required Name of the account holder, as known by the bank. Usually this matches the name of the linked customer. This field will be transliterated, upcased and truncated to 18 characters.
     */
    account_holder_name: string;

    /** Bank account number - see local details for more information. Alternatively you can provide an iban.
     */
    account_number?: string;

    /** Bank code - see local details for more information. Alternatively you can provide an iban.
     */
    bank_code?: string;

    /** Branch code - see local details for more information. Alternatively you can provide an iban.
     */
    branch_code?: string;

    /** ISO 3166-1 alpha-2 code. Defaults to the country code of the iban if supplied, otherwise is required.
     */
    country_code?: string;

    /** International Bank Account Number. Alternatively you can provide local details. IBANs are not accepted for Swedish bank accounts denominated in SEK - you must supply local details.
     */
    iban?: string;
  };

  customer: {
    /** The first line of the customer’s address. Required if mandate import scheme is bacs.
     */
    address_line1?: string;

    /** The second line of the customer’s address.
     */
    address_line2?: string;

    /** The third line of the customer’s address.
     */
    address_line3?: string;

    /** The city of the customer’s address.
     */
    city?: string;

    /** Customer’s company name. Required unless a given_name and family_name are provided. For Canadian customers, the use of a company_name value will mean that any mandate created from this customer will be considered to be a “Business PAD” (otherwise, any mandate will be considered to be a “Personal PAD”).
     */
    company_name?: string;

    /** ISO 3166-1 alpha-2 code.
     */
    country_code?: string;

    /** For Danish customers only. The civic/company number (CPR or CVR) of the customer. Must be supplied if the customer’s bank account is denominated in Danish krone (DKK).
     */
    danish_identity_number?: string;

    /** required Customer’s email address. Required in most cases, as this allows GoCardless to send notifications to this customer.
     */
    email: string;

    /** Customer’s surname. Required unless a company_name is provided.
     */
    family_name?: string;

    /** Customer’s first name. Required unless a company_name is provided.
     */
    given_name?: string;

    /** ISO 639-1 code. Used as the language for notification emails sent by GoCardless if your organisation does not send its own (see compliance requirements). Currently only “en”, “fr”, “de”, “pt”, “es”, “it”, “nl”, “da”, “nb”, “sl”, “sv” are supported. If this is not provided, the language will be chosen based on the country_code (if supplied) or default to “en”.
     */
    language?: string;

    /** Required for New Zealand customers only. Must be supplied if the customer’s bank account is denominated in New Zealand Dollars (NZD).
     */
    phone_number?: string;

    /** The customer’s postal code. Required if mandate import scheme is bacs.
     */
    postal_code?: string;

    /** The customer’s address region, county or department.
     */
    region?: string;

    /** For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer. Must be supplied if the customer’s bank account is denominated in Swedish krona (SEK). This field cannot be changed once it has been set.
     */
    swedish_identity_number?: string;
  };

  amendment: {
    /** The creditor identifier of the direct debit originator. Required if mandate import scheme is sepa.
     */
    original_creditor_id?: string;

    /** Data about the original mandate to be moved or modified.
     */
    original_creditor_name?: string;

    /** The unique SEPA reference for the mandate being amended. Required if mandate import scheme is sepa.
     */
    original_mandate_reference?: string;
  };

  /** A unique identifier for this entry, which you can use (once the import has been processed by GoCardless) to identify the records that have been created.
   */
  record_identifier?: string;

  links: {
    /** required Unique identifier, beginning with “IM”. */
    mandate_import: string;
  };
}

interface MandateImportEntriessResponse {
  /** A unique identifier for this entry, which you can use (once the import has been processed by GoCardless) to identify the records that have been created.
   */
  record_identifier: string;

  /**  Fixed timestamp, recording when this resource was created.
   */

  created_at: string;

  /** The creditor’s name.
   */

  links?: {
    /** The ID of the customer which was created when the mandate import was processed. */
    customer: string;

    /** The ID of the customer bank account which was created when the mandate import was processed. */

    customer_bank_account: string;

    /** The ID of the mandate which was created when the mandate import was processed. */
    mandate: string;

    /** The ID of the mandate import. This is returned when you create a Mandate Import. */
    mandate_import: string;
  };
}

interface ListMandateImportEntriesRequest extends CursorOptions {
  /**  Unique identifier, beginning with “IM”. */
  mandate_import: String;
}
interface CreateMandateImportEntriesSuccessResponse {
  creditors: MandateImportEntriessResponse;
}

interface ListMandateImportEntriesSuccessResponse extends CursorResponse {
  creditors: MandateImportEntriessResponse[];
}

interface MandateImportEntriess {
  create: (
    params: CreateMandateImportEntriesRequest &
      Params<CreateMandateImportEntriesRequest>,
  ) => CreateMandateImportEntriesSuccessResponse;
  list: (
    params: ListMandateImportEntriesRequest &
      Params<ListMandateImportEntriesRequest>,
  ) => ListMandateImportEntriesSuccessResponse;
}

export {
  CreateMandateImportEntriesRequest,
  CreateMandateImportEntriesSuccessResponse,
  ListMandateImportEntriesRequest,
  ListMandateImportEntriesSuccessResponse,
  MandateImportEntriess,
};
