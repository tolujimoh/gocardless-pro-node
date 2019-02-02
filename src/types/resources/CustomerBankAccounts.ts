import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateCustomerBankAccountsRequest {
  /**
   *   Name of the account holder, as known by the bank. Usually this is the same as the name stored with the linked customer. This field will be transliterated, upcased and truncated to 18 characters.
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

  /** ISO 4217 currency code, defaults to national currency of country_code.
   */
  currency?: string;

  /** International Bank Account Number. Alternatively you can provide local details. IBANs are not accepted for Swedish bank accounts denominated in SEK - you must supply local details.
   */
  iban?: string;

  /** Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;

  links: {
    /** required ID of the customer that owns this bank account.
     */
    customer: string;

    /** ID of a customer bank account token to use in place of bank account parameters. */
    customer_bank_account_token?: string;
  };
}

interface ListCustomerBankAccountsRequest extends CursorOptions {
  /** Unique identifier, beginning with “CU”.

   */
  customer?: string;

  /** Boolean value showing whether the bank account is enabled or disabled

   */
  enabled?: boolean;
}

interface CustomerBankAccountsResponse {
  /**
   * Unique identifier, beginning with “BA”.
   */
  id: string;

  /**
   * Name of the account holder, as known by the bank. Usually this is the same as the name stored with the linked customer. This field will be transliterated, upcased and truncated to 18 characters.
   */
  account_holder_name: string;

  /**
   *   Last two digits of account number.
   */
  account_number_ending: string;

  /**
   *   Name of bank, taken from the bank details.
   */
  bank_name: string;

  /**
   *   ISO 3166-1 alpha-2 code. Defaults to the country code of the iban if supplied, otherwise is required.
   */
  country_code: string;

  /**
   *   Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   *   ISO 4217 currency code, defaults to national currency of country_code.
   */
  currency: string;

  /**
   *   Boolean value showing whether the bank account is enabled or disabled.
   */
  enabled: boolean;

  /**
   * Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata: Object;

  links: {
    /**
     * ID of the customer that owns this bank account.
     */
    customer: string;
  };
}

interface UpdateCustomerBankAccountsRequest {
  /**
   Key-value store of custom data. Up to 3 keys are permitted, with key names up to 50 characters and values up to 500 characters.
   */
  metadata?: Object;
}

interface CreateCustomerBankAccountsSuccessResponse {
  customer_bank_accounts: CustomerBankAccountsResponse;
}

interface GetCustomerBankAccountsSuccessResponse {
  customer_bank_accounts: CustomerBankAccountsResponse;
}

interface DisableCustomerBankAccountsSuccessResponse {
  customer_bank_accounts: CustomerBankAccountsResponse;
}

interface ListCustomerBankAccountsSuccessResponse extends CursorResponse {
  customer_bank_accounts: CustomerBankAccountsResponse[];
}

interface UpdateCustomerBankAccountsSuccessResponse {
  customer_bank_accounts: CustomerBankAccountsResponse;
}

interface CustomerBankAccounts {
  create: (
    params: CreateCustomerBankAccountsRequest &
      Params<CreateCustomerBankAccountsRequest>,
  ) => CreateCustomerBankAccountsSuccessResponse;
  list: (
    params: ListCustomerBankAccountsRequest &
      Params<ListCustomerBankAccountsRequest>,
  ) => ListCustomerBankAccountsSuccessResponse;
  disable: (resourceId: string) => DisableCustomerBankAccountsSuccessResponse;
  update: (
    resourceId: string,
    params: UpdateCustomerBankAccountsRequest &
      Params<UpdateCustomerBankAccountsRequest>,
  ) => UpdateCustomerBankAccountsSuccessResponse;
  get: (resourceId: string) => GetCustomerBankAccountsSuccessResponse;
}

export {
  CreateCustomerBankAccountsRequest,
  ListCustomerBankAccountsRequest,
  UpdateCustomerBankAccountsRequest,
  UpdateCustomerBankAccountsSuccessResponse,
  CreateCustomerBankAccountsSuccessResponse,
  GetCustomerBankAccountsSuccessResponse,
  DisableCustomerBankAccountsSuccessResponse,
  ListCustomerBankAccountsSuccessResponse,
  CustomerBankAccounts,
};
