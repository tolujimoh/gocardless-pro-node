import { Params } from "../resources";

interface CreateBankDetailsLookupsRequest {
  /** Bank account number - see local details for more information. Alternatively you can provide an iban. */

  account_number: string;

  /** Bank code - see local details for more information. Alternatively you can provide an iban. */

  bank_code: string;

  /** Branch code - see local details for more information. Alternatively you can provide an iban. */

  branch_code: string;

  /** ISO 3166-1 alpha-2 code. Must be provided if specifying local details. */

  country_code: string;

  /** International Bank Account Number. Alternatively you can provide local details. */

  iban: string;
}

interface BankDetailsLookupsResponse {
  /** Array of schemes supported for this bank account. This will be an empty array if the bank account is not reachable by any schemes. */
  available_debit_schemes: string[];
  /** The name of the bank with which the account is held (if available). */
  bank_name: string;
  /** ISO 9362 SWIFT BIC of the bank with which the account is held. */
  bic: string;
}

interface CreateBankDetailsLookupsSuccessResponse {
  bank_details_lookups: BankDetailsLookupsResponse;
}

interface BankDetailsLookups {
  create: (
    params:
      | CreateBankDetailsLookupsRequest
      | Params<CreateBankDetailsLookupsRequest>,
  ) => CreateBankDetailsLookupsSuccessResponse;
}

export {
  CreateBankDetailsLookupsRequest,
  CreateBankDetailsLookupsSuccessResponse,
  BankDetailsLookups,
};
