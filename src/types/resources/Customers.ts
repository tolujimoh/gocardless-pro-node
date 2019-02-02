import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateCustomersRequest {
  /**
   * The first line of the customer’s address.
   */
  address_line1?: string;

  /**
   *   The second line of the customer’s address.
   */
  address_line2?: string;

  /**
   *   The third line of the customer’s address..
   */
  address_line3?: string;

  /**
   *   The city of the customer’s address
   */
  city?: string;

  /**
   *   Customer’s company name. Required unless a given_name and family_name are provided. For Canadian customers, the use of a company_name value will mean that any mandate created from this customer will be considered to be a “Business PAD” (otherwise, any mandate will be considered to be a “Personal PAD”).
   */
  company_name?: string;

  /**
   *   ISO 3166-1 alpha-2 code.
   */
  country_code?: string;

  /**
   * For Danish customers only. The civic/company number (CPR or CVR) of the customer. Must be supplied if the customer’s bank account is denominated in Danish krone (DKK).
   */
  danish_identity_number?: string;

  /**
   * Customer’s email address. Required in most cases, as this allows GoCardless to send notifications to this customer.
   */
  email?: string;

  /**
   * Customer’s surname. Required unless a company_name is provided.
   */
  family_name?: string;

  /**
   * Customer’s first name. Required unless a company_name is provided.
   */
  given_name?: string;

  /**
   * ISO 639-1 code. Used as the language for notification emails sent by GoCardless if your organisation does not send its own (see compliance requirements). Currently only “en”, “fr”, “de”, “pt”, “es”, “it”, “nl”, “da”, “nb”, “sl”, “sv” are supported. If this is not provided, the language will be chosen based on the country_code (if supplied) or default to “en”.
   */
  language?: string;

  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /**
   * Required for New Zealand customers only. Must be supplied if the customer’s bank account is denominated in New Zealand Dollars (NZD).
   */
  phone_number?: string;

  /**
   * The customer’s postal code.
   */
  postal_code?: string;

  /**
   * The customer’s address region, county or department.
   */
  region?: string;

  /**
   * For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer. Must be supplied if the customer’s bank account is denominated in Swedish krona (SEK). This field cannot be changed once it has been set.
   */
  swedish_identity_number?: string;
}

interface CustomersResponse {
  /**
   * Unique identifier, beginning with CU.
   */
  id: string;

  /**
   * The first line of the customer’s address.
   */
  address_line1: string;

  /**
   *   The second line of the customer’s address.
   */
  address_line2: string;

  /**
   *   The third line of the customer’s address..
   */
  address_line3: string;

  /**
   *   The city of the customer’s address
   */
  city: string;

  /**
   *   Customer’s company name. Required unless a given_name and family_name are provided. For Canadian customers, the use of a company_name value will mean that any mandate created from this customer will be considered to be a “Business PAD” (otherwise, any mandate will be considered to be a “Personal PAD”).
   */
  company_name: string;

  /**
   *   ISO 3166-1 alpha-2 code.
   */
  country_code: string;

  /**
   *   Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   * For Danish customers only. The civic/company number (CPR or CVR) of the customer. Must be supplied if the customer’s bank account is denominated in Danish krone (DKK).
   */
  danish_identity_number: string;

  /**
   * Customer’s email address. Required in most cases, as this allows GoCardless to send notifications to this customer.
   */
  email: string;

  /**
   * Customer’s surname. Required unless a company_name is provided.
   */
  family_name: string;

  /**
   * Customer’s first name. Required unless a company_name is provided.
   */
  given_name: string;

  /**
   * ISO 639-1 code. Used as the language for notification emails sent by GoCardless if your organisation does not send its own (see compliance requirements). Currently only “en”, “fr”, “de”, “pt”, “es”, “it”, “nl”, “da”, “nb”, “sl”, “sv” are supported. If this is not provided, the language will be chosen based on the country_code (if supplied) or default to “en”.
   */
  language: string;

  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata: Object;

  /**
   * Required for New Zealand customers only. Must be supplied if the customer’s bank account is denominated in New Zealand Dollars (NZD).
   */
  phone_number: string;

  /**
   * The customer’s postal code.
   */
  postal_code: string;

  /**
   * The customer’s address region, county or department.
   */
  region: string;

  /**
   * For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer. Must be supplied if the customer’s bank account is denominated in Swedish krona (SEK). This field cannot be changed once it has been set.
   */
  swedish_identity_number: string;
}

interface UpdateCustomersRequest {
  /**
   * The first line of the customer’s address.
   */
  address_line1?: string;

  /**
   *   The second line of the customer’s address.
   */
  address_line2?: string;

  /**
   *   The third line of the customer’s address..
   */
  address_line3?: string;

  /**
   *   The city of the customer’s address
   */
  city?: string;

  /**
   *   Customer’s company name. Required unless a given_name and family_name are provided. For Canadian customers, the use of a company_name value will mean that any mandate created from this customer will be considered to be a “Business PAD” (otherwise, any mandate will be considered to be a “Personal PAD”).
   */
  company_name?: string;

  /**
   *   ISO 3166-1 alpha-2 code.
   */
  country_code?: string;

  /**
   * For Danish customers only. The civic/company number (CPR or CVR) of the customer. Must be supplied if the customer’s bank account is denominated in Danish krone (DKK).
   */
  danish_identity_number?: string;

  /**
   * Customer’s email address. Required in most cases, as this allows GoCardless to send notifications to this customer.
   */
  email?: string;

  /**
   * Customer’s surname. Required unless a company_name is provided.
   */
  family_name?: string;

  /**
   * Customer’s first name. Required unless a company_name is provided.
   */
  given_name?: string;

  /**
   * ISO 639-1 code. Used as the language for notification emails sent by GoCardless if your organisation does not send its own (see compliance requirements). Currently only “en”, “fr”, “de”, “pt”, “es”, “it”, “nl”, “da”, “nb”, “sl”, “sv” are supported. If this is not provided, the language will be chosen based on the country_code (if supplied) or default to “en”.
   */
  language?: string;

  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  /**
   * Required for New Zealand customers only. Must be supplied if the customer’s bank account is denominated in New Zealand Dollars (NZD).
   */
  phone_number?: string;

  /**
   * The customer’s postal code.
   */
  postal_code?: string;

  /**
   * The customer’s address region, county or department.
   */
  region?: string;

  /**
   * For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer. Must be supplied if the customer’s bank account is denominated in Swedish krona (SEK). This field cannot be changed once it has been set.
   */
  swedish_identity_number?: string;
}

interface CreateCustomersSuccessResponse {
  customers: CustomersResponse;
}

interface GetCustomersSuccessResponse {
  customers: CustomersResponse;
}

interface ListCustomersSuccessResponse extends CursorResponse {
  customers: CustomersResponse[];
}

interface UpdateCustomersSuccessResponse {
  customers: CustomersResponse;
}

interface Customers {
  create: (
    params: CreateCustomersRequest & Params<CreateCustomersRequest>,
  ) => CreateCustomersSuccessResponse;
  list: (
    params: CursorOptions & Params<CursorOptions>,
  ) => ListCustomersSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateCustomersRequest & Params<UpdateCustomersRequest>,
  ) => UpdateCustomersSuccessResponse;
  get: (resourceId: string) => GetCustomersSuccessResponse;
}

export {
  CreateCustomersRequest,
  UpdateCustomersRequest,
  UpdateCustomersSuccessResponse,
  CreateCustomersSuccessResponse,
  GetCustomersSuccessResponse,
  ListCustomersSuccessResponse,
  Customers,
};
