export const CREATE_REDIRECT_FLOWS_CORRECT_REQUEST = {
  params: {
    description: "Wine boxes",
    session_token: "SESS_wSs0uGYMISxzqOBq",
    success_redirect_url: "https://example.com/pay/confirm",
    prefilled_customer: {
      given_name: "Frank",
      family_name: "Osborne",
      email: "frank.osborne@acmeplc.com",
    },
  },
};

export const CREATE_REDIRECT_FLOWS_SUCCESS_RESPONSE = {
  redirect_flows: {
    id: "RE123",
    description: "Wine boxes",
    session_token: "SESS_wSs0uGYMISxzqOBq",
    scheme: null,
    success_redirect_url: "https://example.com/pay/confirm",
    redirect_url: "http://pay.gocardless.com/flow/RE123",
    created_at: "2014-10-22T13:10:06.000Z",
    links: {
      creditor: "CR123",
    },
  },
};

export const COMPLETE_REDIRECT_FLOWS_SUCCESS_RESPONSE = {
  redirect_flows: {
    id: "RE123",
    description: "Wine boxes",
    session_token: "SESS_wSs0uGYMISxzqOBq",
    scheme: null,
    success_redirect_url: "https://example.com/pay/confirm",
    confirmation_url: "https://pay.gocardless.com/flow/RE123/success",
    created_at: "2014-10-22T13:10:06.000Z",
    links: {
      creditor: "CR123",
      mandate: "MD123",
      customer: "CU123",
      customer_bank_account: "BA123",
    },
  },
};

export const GET_REDIRECT_FLOWS_SUCCESS_RESPONSE = {
  redirect_flows: {
    id: "RE123",
    description: "Wine boxes",
    session_token: "SESS_wSs0uGYMISxzqOBq",
    scheme: null,
    success_redirect_url: "https://example.com/pay/confirm",
    redirect_url: "http://pay.gocardless.com/flow/RE123",
    created_at: "2014-10-22T13:10:06.000Z",
    links: {
      creditor: "CR123",
    },
  },
};

export const COMPLETE_REDIRECT_FLOWS_CORRECT_REQUEST = {
  params: {
    session_token: "SESS_wSs0uGYMISxzqOBq",
  },
};
