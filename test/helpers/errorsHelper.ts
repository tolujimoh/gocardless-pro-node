export const CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_422_REQUEST = {
  params: {
    account_number: "55779911",
    branch_code: "I'm not a sort code",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    links: {
      customer: "CU123",
    },
  },
};

export const HTTP_422_RESPONSE = {
  error: {
    documentation_url: "https://developer.gocardless.com/#validation_failed",
    message: "Validation failed",
    type: "validation_failed",
    code: 422,
    request_id: "dd50eaaf-8213-48fe-90d6-5466872efbc4",
    errors: [
      {
        message: "must be a number",
        field: "branch_code",
        request_pointer: "/customer_bank_accounts/branch_code",
      },
      {
        message: "is the wrong length (should be 8 characters)",
        field: "branch_code",
        request_pointer: "/customer_bank_accounts/branch_code",
      },
    ],
  },
};

export const CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_400_REQUEST = {
  params: {
    account_number: "55779911",
    branch_code: "200000",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    links: {
      customer: "CU123",
    },
  },
};

export const HTTP_400_RESPONSE = {
  error: {
    message: "Invalid document structure",
    documentation_url:
      "https://developer.gocardless.com/#invalid_document_structure",
    type: "invalid_api_usage",
    request_id: "bd271b37-a2f5-47c8-b461-040dfe0e9cb1",
    code: 400,
    errors: [
      {
        reason: "invalid_document_structure",
        message: "Invalid document structure",
      },
    ],
  },
};

export const CREATE_CREDITOR_BANK_ACCOUNT_HTTP_409_REQUEST = {
  params: {
    account_number: "55779911",
    branch_code: "200000",
    country_code: "GB",
    set_as_default_payout_account: true,
    account_holder_name: "Nude Wines",
    links: {
      creditor: "CR123",
    },
  },
};

export const HTTP_409_RESPONSE = {
  error: {
    message: "Bank account already exists",
    documentation_url: "https://developer.gocardless.com/#bank_account_exists",
    type: "validation_failed",
    request_id: "bd271b37-a2f5-47c8-b461-040dfe0e9cb1",
    code: 409,
    errors: [
      {
        reason: "bank_account_exists",
        message: "Bank account already exists",
        links: {
          creditor_bank_account: "BA123",
        },
      },
    ],
  },
};
