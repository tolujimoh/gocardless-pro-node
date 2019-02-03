export const CREATE_REFUNDS_CORRECT_REQUEST = {
  refunds: {
    amount: 100,
    total_amount_confirmation: 150,
    reference: "Nude Wines refund",
    metadata: {
      reason: "late delivery",
    },
    links: {
      payment: "PM123",
    },
  },
};

export const CREATE_REFUNDS_SUCCESS_RESPONSE = {
  refunds: {
    id: "RF123",
    created_at: "2014-05-08T17:01:06.000Z",
    amount: 100,
    currency: "GBP",
    reference: "Nude Wines refund",
    metadata: {
      reason: "late delivery",
    },
    links: {
      payment: "PM123",
    },
  },
};

export const LIST_REFUNDS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
  refunds: [
    {
      id: "RF123",
      created_at: "2014-05-08T17:01:06.000Z",
      amount: 100,
      currency: "GBP",
      reference: "Nude Wines refund",
      metadata: {
        reason: "late failure",
      },
      links: {
        payment: "PM123",
      },
    },
  ],
};

export const GET_REFUNDS_SUCCESS_RESPONSE = {
  refunds: {
    id: "RF123",
    created_at: "2014-05-08T17:01:06.000Z",
    amount: 100,
    currency: "GBP",
    reference: "Nude Wines refund",
    metadata: {
      reason: "late failure",
    },
    links: {
      payment: "PM123",
    },
  },
};

export const UPDATE_REFUNDS_SUCCESS_RESPONSE = {
  refunds: {
    id: "RF123",
    created_at: "2014-05-08T17:01:06.000Z",
    amount: 100,
    currency: "GBP",
    reference: "Nude Wines refund",
    metadata: {
      key: "value",
    },
    links: {
      payment: "PM123",
    },
  },
};

export const LIST_REFUNDS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_REFUNDS_CORRECT_REQUEST = {
  refunds: {
    metadata: {
      key: "value",
    },
  },
};
