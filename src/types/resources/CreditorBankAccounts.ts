import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateCreditorBankAccountsRequest {
  /**
   *   Name of the account holder, as known by the bank. Usually this is the same as the name stored with the linked creditor. This field will be transliterated, upcased and truncated to 18 characters.
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

  /** Defaults to false. When this is set to true, it will cause this bank account to be set as the account that GoCardless will pay out to.
   */
  set_as_default_payout_account?: boolean;

  /** required ID of the creditor that owns this bank account.
   */
  links: {
    creditor: string;
  };
}

interface ListCreditorBankAccountsRequest extends CursorOptions {
  /** Unique identifier, beginning with “CR”.

   */
  creditor?: string;

  /** Boolean value showing whether the bank account is enabled or disabled

   */
  enabled?: boolean;
}

interface CreditorBankAccountsResponse {
  /**
   * Unique identifier, beginning with “BA”.
   */
  id: string;

  /**
   * Name of the account holder, as known by the bank. Usually this is the same as the name stored with the linked creditor. This field will be transliterated, upcased and truncated to 18 characters.
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
     * ID of the creditor that owns this bank account.
     */
    creditor: string;
  };
}

interface CreateCreditorBankAccountsSuccessResponse {
  creditor_bank_accounts: CreditorBankAccountsResponse;
}

interface GetCreditorBankAccountsSuccessResponse {
  creditor_bank_accounts: CreditorBankAccountsResponse;
}

interface DisableCreditorBankAccountsSuccessResponse {
  creditor_bank_accounts: CreditorBankAccountsResponse;
}

interface ListCreditorBankAccountsSuccessResponse extends CursorResponse {
  creditor_bank_accounts: CreditorBankAccountsResponse[];
}

interface CreditorBankAccounts {
  create: (
    params: CreateCreditorBankAccountsRequest  | 
      Params<CreateCreditorBankAccountsRequest>,
  ) => CreateCreditorBankAccountsSuccessResponse;
  list: (
    params: ListCreditorBankAccountsRequest  | 
      Params<ListCreditorBankAccountsRequest>,
  ) => ListCreditorBankAccountsSuccessResponse;
  disable: (resourceId: string) => DisableCreditorBankAccountsSuccessResponse;
  get: (resourceId: string) => GetCreditorBankAccountsSuccessResponse;
}

export {
  CreateCreditorBankAccountsRequest,
  ListCreditorBankAccountsRequest,
  CreateCreditorBankAccountsSuccessResponse,
  GetCreditorBankAccountsSuccessResponse,
  DisableCreditorBankAccountsSuccessResponse,
  ListCreditorBankAccountsSuccessResponse,
  CreditorBankAccounts,
};
