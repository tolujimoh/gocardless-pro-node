export const CREATE_CREDITOR_BANK_ACCOUNTS_CORRECT_REQUEST = {
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

export const CREATE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  creditor_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-27T12:43:17.000Z",
    account_holder_name: "Nude Wines",
    account_number_ending: "11",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    enabled: true,
    links: {
      creditor: "CR123",
    },
  },
};

export const LIST_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: "BA123",
    },
    limit: 50,
  },
  creditor_bank_accounts: [
    {
      id: "BA123",
      created_at: "2014-05-27T12:43:17.000Z",
      account_holder_name: "Nude Wines",
      account_number_ending: "11",
      country_code: "GB",
      currency: "GBP",
      bank_name: "BARCLAYS BANK PLC",
      enabled: true,
      links: {
        creditor: "CR123",
      },
    },
  ],
};

export const GET_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  creditor_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-27T12:43:17.000Z",
    account_holder_name: "Nude Wines",
    account_number_ending: "11",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    enabled: true,
    links: {
      creditor: "CR123",
    },
  },
};

export const DISABLE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE = {
  creditor_bank_accounts: {
    id: "BA123",
    created_at: "2014-05-27T12:43:17.000Z",
    account_holder_name: "Nude Wines",
    account_number_ending: "11",
    country_code: "GB",
    currency: "GBP",
    bank_name: "BARCLAYS BANK PLC",
    enabled: false,
    links: {
      creditor: "CR123",
    },
  },
};
