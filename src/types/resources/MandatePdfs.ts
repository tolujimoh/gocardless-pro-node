import { Params } from "../resources";

interface CreateMandatePdfsRequest {
  /** Name of the account holder, as known by the bank. Usually this matches the name of the customer. This field cannot exceed 18 characters. */

  account_holder_name: string;

  /** Bank account number - see local details for more information. Alternatively you can provide an iban. */

  account_number: string;

  /** The first line of the customer’s address. */

  address_line1: string;

  /** The second line of the customer’s address. */

  address_line2: string;

  /** The third line of the customer’s address. */

  address_line3: string;

  /** Bank code - see local details for more information. Alternatively you can provide an iban. */

  bank_code: string;

  /** SWIFT BIC. Will be derived automatically if a valid iban or local details are provided. */

  bic: string;

  /** Branch code - see local details for more information. Alternatively you can provide an iban. */

  branch_code: string;

  /** The city of the customer’s address. */

  city: string;

  /** ISO 3166-1 alpha-2 code. Required if providing local details. */

  country_code: string;

  /** For Danish customers only. The civic/company number (CPR or CVR) of the customer. Must be supplied if the customer’s bank account is denominated in Danish krone (DKK). Can only be supplied for Betalingsservice mandates. */

  danish_identity_number: string;

  /** International Bank Account Number. Alternatively you can provide local details. IBANs cannot be provided for Autogiro mandates. */

  iban: string;

  /** Unique 6 to 18 character reference. This may be left blank at the point of signing. */

  mandate_reference: string;

  /** ITU E.123 formatted phone number, including country code. Required for New Zealand customers only. Must be supplied if the customer’s bank account is denominated in New Zealand Dollars (NZD). */

  phone_number: string;

  /** The customer’s postal code. */

  postal_code: string;

  /** The customer’s address region, county or department. */

  region: string;

  /** Direct Debit scheme. Can be supplied or automatically detected from the bank account details provided. If you do not provide a scheme, you must provide either a mandate, an iban, or local details including a country_code. */

  scheme: string;

  /** If provided, a form will be generated with this date and no signature field. */

  signature_date: string;

  /** For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer. Can only be supplied for Autogiro mandates. */

  swedish_identity_number: string;

  links: {
    /** ID of an existing mandate to build the PDF from. The customer’s bank details will be censored in the generated PDF. No other parameters may be provided alongside this. */
    mandate: string;
  };
}

interface MandatePdfsResponse {
  /** The date and time at which the url will expire (10 minutes after the original request). */

  expires_at: string;
  /** The URL at which this mandate PDF can be viewed until it expires at the date and time specified by expires_at. You should not store this URL or rely on its structure remaining the same. */

  url: string;
}

interface CreateMandatePdfsSuccessResponse {
  mandate_pdfs: MandatePdfsResponse;
}

interface MandatePdfs {
  create: (
    params: CreateMandatePdfsRequest | Params<CreateMandatePdfsRequest>,
  ) => CreateMandatePdfsSuccessResponse;
}

export {
  CreateMandatePdfsRequest,
  CreateMandatePdfsSuccessResponse,
  MandatePdfs,
};
