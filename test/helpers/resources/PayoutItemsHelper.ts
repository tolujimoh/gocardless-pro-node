export const LIST_PAYOUT_ITEMS_SUCCESS_RESPONSE = {
  payout_items: [
    {
      amount: "1000.0",
      type: "payment_paid_out",
      links: {
        payment: "PM123",
      },
    },
    {
      amount: "30.0",
      type: "payment_paid_out",
      links: {
        payment: "PM456",
      },
    },
    {
      amount: "-500.0",
      type: "payment_refunded",
      links: {
        payment: "PM789",
      },
    },
    {
      amount: "-25.0",
      type: "gocardless_fee",
      links: {
        payment: "PM123",
      },
    },
    {
      amount: "-3.0",
      type: "gocardless_fee",
      links: {
        payment: "PM456",
      },
    },
    {
      amount: "-1.0",
      type: "app_fee",
      links: {
        payment: "PM456",
      },
    },
  ],
  meta: {
    cursors: { before: null, after: null },
    limit: 50,
  },
};

export const LIST_PAYOUT_ITEMS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};
