export const LIST_EVENTS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      after: null,
      before: null,
    },
    limit: 50,
  },
  events: [
    {
      id: "EV123",
      created_at: "2014-04-08T17:01:06.000Z",
      resource_type: "mandates",
      action: "cancelled",
      details: {
        origin: "bank",
        cause: "bank_account_disabled",
        description: "Customer's bank account closed",
        scheme: "bacs",
        reason_code: "ADDACS-B",
      },
      metadata: {},
      links: {
        mandate: "MD123",
      },
    },
    {
      id: "EV456",
      created_at: "2014-04-08T17:01:06.000Z",
      resource_type: "payments",
      action: "cancelled",
      details: {
        origin: "bank",
        cause: "mandate_cancelled",
        description:
          "The mandate for this payment was cancelled at a bank branch.",
        scheme: "bacs",
        reason_code: "ADDACS-B",
      },
      metadata: {},
      links: {
        payment: "PM123",
        parent_event: "EV123",
      },
    },
  ],
};

export const GET_EVENTS_SUCCESS_RESPONSE = {
  events: {
    id: "EV123",
    created_at: "2014-04-08T17:01:06.000Z",
    resource_type: "payments",
    action: "confirmed",
    details: {
      origin: "gocardless",
      cause: "payment_confirmed",
      description: "Payment confirmed",
    },
    metadata: {},
    links: {
      payment: "PM123",
    },
  },
};

export const LIST_EVENTS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};
