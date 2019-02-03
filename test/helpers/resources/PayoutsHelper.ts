export const LIST_PAYOUTS_SUCCESS_RESPONSE = {
  payouts: [
    {
      id: "PO123",
      amount: 1000,
      deducted_fees: 10,
      currency: "GBP",
      created_at: "2014-06-20T13:23:34.000Z",
      reference: "ref-1",
      status: "pending",
      links: {
        creditor_bank_account: "BA123",
        creditor: "CR123",
      },
    },
  ],
  meta: {
    cursors: {
      after: null,
      before: null,
    },
    limit: 50,
  },
};

export const GET_PAYOUTS_SUCCESS_RESPONSE = {
  payouts: {
    id: "PO123",
    amount: 1000,
    deducted_fees: 10,
    currency: "GBP",
    created_at: "2014-06-20T13:23:34.000Z",
    reference: "ref-1",
    arrival_date: "2014-06-27",
    status: "pending",
    links: {
      creditor_bank_account: "BA123",
      creditor: "CR123",
    },
  },
};

export const LIST_PAYOUTS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};
