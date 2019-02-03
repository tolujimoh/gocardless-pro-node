export const CREATE_SUBSCRIPTIONS_CORRECT_REQUEST = {
  subscriptions: {
    amount: "2500",
    currency: "GBP",
    name: "Monthly Magazine",
    interval_unit: "monthly",
    day_of_month: "1",
    metadata: {
      order_no: "ABCD1234",
    },
    links: {
      mandate: "MA123",
    },
  },
};

export const CREATE_SUBSCRIPTIONS_SUCCESS_RESPONSE = {
  subscriptions: {
    id: "SB123",
    created_at: "2014-10-20T17:01:06.000Z",
    amount: 2500,
    currency: "GBP",
    status: "active",
    name: "Monthly Magazine",
    start_date: "2014-11-03",
    end_date: null,
    interval: 1,
    interval_unit: "monthly",
    day_of_month: 1,
    month: null,
    payment_reference: null,
    app_fee: null,
    upcoming_payments: [
      { charge_date: "2014-11-03", amount: 2500 },
      { charge_date: "2014-12-01", amount: 2500 },
      { charge_date: "2015-01-02", amount: 2500 },
      { charge_date: "2015-02-02", amount: 2500 },
      { charge_date: "2015-03-02", amount: 2500 },
      { charge_date: "2015-04-01", amount: 2500 },
      { charge_date: "2015-05-01", amount: 2500 },
      { charge_date: "2015-06-01", amount: 2500 },
      { charge_date: "2015-07-01", amount: 2500 },
      { charge_date: "2015-08-03", amount: 2500 },
    ],
    metadata: {
      order_no: "ABCD1234",
    },
    links: {
      mandate: "MA123",
    },
  },
};

export const LIST_SUBSCRIPTIONS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
  subscriptions: [
    {
      id: "SB123",
      created_at: "2014-10-20T17:01:06.000Z",
      amount: 2500,
      currency: "GBP",
      status: "active",
      name: "Monthly Magazine",
      start_date: "2014-11-03",
      end_date: null,
      interval: 1,
      interval_unit: "monthly",
      day_of_month: 1,
      month: null,
      payment_reference: null,
      upcoming_payments: [
        { charge_date: "2014-11-03", amount: 2500 },
        { charge_date: "2014-12-01", amount: 2500 },
        { charge_date: "2015-01-02", amount: 2500 },
        { charge_date: "2015-02-02", amount: 2500 },
        { charge_date: "2015-03-02", amount: 2500 },
        { charge_date: "2015-04-01", amount: 2500 },
        { charge_date: "2015-05-01", amount: 2500 },
        { charge_date: "2015-06-01", amount: 2500 },
        { charge_date: "2015-07-01", amount: 2500 },
        { charge_date: "2015-08-03", amount: 2500 },
      ],
      metadata: {
        order_no: "ABCD1234",
      },
      links: {
        mandate: "MA123",
      },
    },
  ],
};

export const GET_SUBSCRIPTIONS_SUCCESS_RESPONSE = {
  subscriptions: {
    id: "SB123",
    created_at: "2014-10-20T17:01:06.000Z",
    amount: 2500,
    currency: "GBP",
    status: "active",
    name: "Monthly Magazine",
    start_date: "2014-11-03",
    end_date: null,
    interval: 1,
    interval_unit: "monthly",
    day_of_month: 1,
    month: null,
    payment_reference: null,
    upcoming_payments: [
      { charge_date: "2014-11-03", amount: 2500 },
      { charge_date: "2014-12-01", amount: 2500 },
      { charge_date: "2015-01-02", amount: 2500 },
      { charge_date: "2015-02-02", amount: 2500 },
      { charge_date: "2015-03-02", amount: 2500 },
      { charge_date: "2015-04-01", amount: 2500 },
      { charge_date: "2015-05-01", amount: 2500 },
      { charge_date: "2015-06-01", amount: 2500 },
      { charge_date: "2015-07-01", amount: 2500 },
      { charge_date: "2015-08-03", amount: 2500 },
    ],
    metadata: {
      order_no: "ABCD1234",
    },
    links: {
      mandate: "MA123",
    },
  },
};

export const UPDATE_SUBSCRIPTIONS_SUCCESS_RESPONSE = {
  subscriptions: {
    id: "SB123",
    created_at: "2014-10-20T17:01:06.000Z",
    amount: 2500,
    currency: "GBP",
    status: "active",
    name: "New name",
    start_date: "2014-11-03",
    end_date: null,
    interval: 1,
    interval_unit: "monthly",
    day_of_month: 1,
    month: null,
    payment_reference: null,
    upcoming_payments: [
      { charge_date: "2014-11-03", amount: 2500 },
      { charge_date: "2014-12-01", amount: 2500 },
      { charge_date: "2015-01-02", amount: 2500 },
      { charge_date: "2015-02-02", amount: 2500 },
      { charge_date: "2015-03-02", amount: 2500 },
      { charge_date: "2015-04-01", amount: 2500 },
      { charge_date: "2015-05-01", amount: 2500 },
      { charge_date: "2015-06-01", amount: 2500 },
      { charge_date: "2015-07-01", amount: 2500 },
      { charge_date: "2015-08-03", amount: 2500 },
    ],
    metadata: {
      order_no: "ABCD4321",
    },
    links: {
      mandate: "MA123",
    },
  },
};

export const LIST_SUBSCRIPTIONS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_SUBSCRIPTIONS_CORRECT_REQUEST = {
  subscriptions: {
    name: "New name",
    metadata: {
      order_no: "ABCD4321",
    },
  },
};

export const CANCEL_SUBSCRIPTIONS_SUCCESS_RESPONSE = {
  subscriptions: {
    id: "SB123",
    created_at: "2014-10-20T17:01:06.000Z",
    amount: 2500,
    currency: "GBP",
    status: "cancelled",
    name: "Monthly Magazine",
    start_date: "2014-11-03",
    end_date: null,
    interval: 1,
    interval_unit: "monthly",
    day_of_month: 1,
    month: null,
    payment_reference: null,
    upcoming_payments: [],
    metadata: {
      order_no: "ABCD1234",
    },
    links: {
      mandate: "MA123",
    },
  },
};

export const CANCEL_SUBSCRIPTIONS_CORRECT_REQUEST = {
  data: {
    metadata: {},
  },
};
