export const CREATE_PAYMENTS_CORRECT_REQUEST = {
  payments: {
    amount: 100,
    currency: "GBP",
    charge_date: "2014-05-19",
    reference: "WINEBOX001",
    metadata: {
      order_dispatch_date: "2014-05-22",
    },
    links: {
      mandate: "MD123",
    },
  },
};

export const CREATE_PAYMENTS_SUCCESS_RESPONSE = {
  payments: {
    id: "PM123",
    created_at: "2014-05-08T17:01:06.000Z",
    charge_date: "2014-05-21",
    amount: 100,
    description: null,
    currency: "GBP",
    status: "pending_submission",
    reference: "WINEBOX001",
    metadata: {
      order_dispatch_date: "2014-05-22",
    },
    amount_refunded: 0,
    links: {
      mandate: "MD123",
      creditor: "CR123",
    },
  },
};

export const LIST_PAYMENTS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
  payments: [
    {
      id: "PM123",
      created_at: "2014-05-08T17:01:06.000Z",
      charge_date: "2014-05-15",
      amount: 100,
      description: null,
      currency: "GBP",
      status: "pending_submission",
      reference: "WINEBOX001",
      metadata: {
        order_dispatch_date: "2014-05-22",
      },
      amount_refunded: 0,
      links: {
        mandate: "MD123",
        creditor: "CR123",
      },
    },
  ],
};

export const GET_PAYMENTS_SUCCESS_RESPONSE = {
  payments: {
    id: "PM123",
    created_at: "2014-05-08T17:01:06.000Z",
    charge_date: "2014-05-15",
    amount: 100,
    description: null,
    currency: "GBP",
    status: "pending_submission",
    reference: "WINEBOX001",
    metadata: {
      order_dispatch_date: "2014-05-22",
    },
    amount_refunded: 0,
    links: {
      mandate: "MD123",
      creditor: "CR123",
    },
  },
};

export const UPDATE_PAYMENTS_SUCCESS_RESPONSE = {
  payments: {
    id: "PM123",
    created_at: "2014-05-08T17:01:06.000Z",
    charge_date: "2014-05-15",
    amount: 100,
    description: null,
    currency: "GBP",
    status: "pending_submission",
    reference: "WINEBOX001",
    metadata: {
      key: "value",
    },
    amount_refunded: 0,
    links: {
      mandate: "MD123",
      creditor: "CR123",
    },
  },
};

export const LIST_PAYMENTS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_PAYMENTS_CORRECT_REQUEST = {
  payments: {
    metadata: {
      key: "value",
    },
  },
};

export const CANCEL_PAYMENTS_SUCCESS_RESPONSE = {
  mandates: {
    id: "MD123",
    created_at: "2014-05-08T17:01:06.000Z",
    reference: "REF-123",
    status: "cancelled",
    scheme: "bacs",
    next_possible_charge_date: null,
    metadata: {
      contract: "ABCD1234",
    },
    links: {
      customer_bank_account: "BA123",
      creditor: "CR123",
      customer: "CU123",
    },
  },
};

export const CANCEL_PAYMENTS_CORRECT_REQUEST = {
  data: {
    metadata: {
      ticket_id: "TK123",
    },
  },
};

export const RETRY_PAYMENTS_SUCCESS_RESPONSE = {
  payments: {
    id: "PM123",
    created_at: "2014-05-08T17:01:06.000Z",
    charge_date: "2014-05-21",
    amount: 100,
    description: null,
    currency: "GBP",
    status: "submitted",
    reference: "WINEBOX001",
    metadata: {
      order_dispatch_date: "2014-05-22",
    },
    amount_refunded: 0,
    links: {
      mandate: "MD123",
      creditor: "CR123",
    },
  },
};

export const RETRY_PAYMENTS_CORRECT_REQUEST = {
  data: {
    metadata: {
      reason: "Customer request",
    },
  },
};
