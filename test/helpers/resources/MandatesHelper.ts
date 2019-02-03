export const CREATE_MANDATES_CORRECT_REQUEST = {
  mandates: {
    scheme: "bacs",
    metadata: {
      contract: "ABCD1234",
    },
    links: {
      customer_bank_account: "BA123",
      creditor: "CR123",
    },
  },
};

export const CREATE_MANDATES_SUCCESS_RESPONSE = {
  mandates: {
    id: "MD123",
    created_at: "2014-05-08T17:01:06.000Z",
    reference: "REF-123",
    status: "pending_submission",
    scheme: "bacs",
    next_possible_charge_date: "2014-11-10",
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

export const LIST_MANDATES_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
  mandates: [
    {
      id: "MD123",
      created_at: "2014-05-08T17:01:06.000Z",
      reference: "REF-123",
      status: "pending_submission",
      scheme: "bacs",
      next_possible_charge_date: "2014-11-10",
      metadata: {
        contract: "ABCD1234",
      },
      links: {
        customer_bank_account: "BA123",
        creditor: "CR123",
        customer: "CU123",
      },
    },
  ],
};

export const GET_MANDATES_SUCCESS_RESPONSE = {
  mandates: {
    id: "MD123",
    created_at: "2014-05-08T17:01:06.000Z",
    reference: "REF-123",
    status: "pending_submission",
    scheme: "bacs",
    next_possible_charge_date: "2014-11-10",
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

export const UPDATE_MANDATES_SUCCESS_RESPONSE = {
  mandates: {
    id: "MD123",
    created_at: "2014-05-08T17:01:06.000Z",
    reference: "REF-123",
    status: "pending_submission",
    scheme: "bacs",
    next_possible_charge_date: "2014-11-10",
    metadata: {
      key: "value",
    },
    links: {
      customer_bank_account: "BA123",
      creditor: "CR123",
      customer: "CU123",
    },
  },
};

export const LIST_MANDATES_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_MANDATES_CORRECT_REQUEST = {
  mandates: {
    metadata: {
      key: "value",
    },
  },
};

export const CANCEL_MANDATES_SUCCESS_RESPONSE = {
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

export const CANCEL_MANDATES_CORRECT_REQUEST = {
  data: {
    metadata: {},
  },
};

export const REINSTATE_MANDATES_SUCCESS_RESPONSE = {
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

export const REINSTATE_MANDATES_CORRECT_REQUEST = {
  data: {
    metadata: {},
  },
};
