export const CREATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST = {
  parmas: {
    account_number: "55779911",
    branch_code: "200000",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    links: {
      customer: "CU123",
    },
  },
};

export const CREATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  customer_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-08T17:01:06.000Z",
    account_holder_name: "Frank Osborne",
    account_number_ending: "11",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    metadata: {},
    enabled: true,
    links: {
      customer: "CU123",
    },
  },
};

export const LIST_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
  customer_bank_accounts: [
    {
      id: "BA123",
      created_at: "2014-05-08T17:01:06.000Z",
      account_holder_name: "Frank Osborne",
      account_number_ending: "11",
      country_code: "GB",
      currency: "GBP",
      bank_name: "BARCLAYS BANK PLC",
      metadata: {},
      enabled: true,
      links: {
        customer: "CU123",
      },
    },
  ],
};

export const GET_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  customer_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-08T17:01:06.000Z",
    account_number_ending: "11",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    metadata: {},
    enabled: true,
    links: {
      customer: "CU123",
    },
  },
};

export const UPDATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  customer_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-08T17:01:06.000Z",
    account_number_ending: "11",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    metadata: {
      key: "value",
    },
    enabled: true,
    links: {
      customer: "CU123",
    },
  },
};

export const DISABLE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  customer_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-08T17:01:06.000Z",
    account_number_ending: "11",
    account_holder_name: "Frank Osborne",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    metadata: {},
    enabled: false,
    links: {
      customer: "CU123",
    },
  },
};

export const LIST_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST = {
  customer_bank_accounts: {
    metadata: {
      key: "value",
    },
  },
};
