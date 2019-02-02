export const CREATE_CREDITORS_CORRECT_REQUEST = {
  params: {
    name: "The Cheese Club",
    address_line1: "123 Street",
    city: "London",
    postal_code: "E2 8DP",
    country_code: "GB",
  },
};

export const CREATE_CREDITORS_SUCCESS_RESPONSE = {
  creditors: {
    id: "CR123",
    created_at: "2017-02-16T12:34:56.000Z",
    name: "The Cheese Club",
    address_line1: "123 Street",
    address_line2: null,
    address_line3: null,
    city: "London",
    region: null,
    postal_code: "E2 8DP",
    country_code: "GB",
    logo_url: null,
    verification_status: "action_required",
    can_create_refunds: false,
    scheme_identifiers: [
      {
        name: "GoCardless",
        scheme: "bacs",
        reference: "420042",
        minimum_advance_notice: 3,
        currency: "GBP",
        address_line1: "338 Goswell Road",
        address_line2: null,
        address_line3: null,
        city: "London",
        region: null,
        postal_code: "EC1V 7LQ",
        country_code: "GB",
        email: "help@gocardless.com",
        phone_number: "+44 20 7183 8674",
        can_specify_mandate_reference: false,
      },
    ],
    links: {},
  },
};

export const LIST_CREDITORS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: null,
      after: "CR123",
    },
    limit: 50,
  },
  creditors: [
    {
      id: "CR123",
      created_at: "2017-02-16T12:34:56.000Z",
      name: "The Cheese Club",
      address_line1: "123 Street",
      address_line2: null,
      address_line3: null,
      city: "London",
      region: null,
      postal_code: "E2 8DP",
      country_code: "GB",
      logo_url: null,
      verification_status: "successful",
      can_create_refunds: false,
      scheme_identifiers: [
        {
          name: "GoCardless",
          scheme: "bacs",
          reference: "420042",
          minimum_advance_notice: 3,
          currency: "GBP",
          address_line1: "338 Goswell Road",
          address_line2: null,
          address_line3: null,
          city: "London",
          region: null,
          postal_code: "EC1V 7LQ",
          country_code: "GB",
          email: "help@gocardless.com",
          phone_number: "+44 20 7183 8674",
          can_specify_mandate_reference: false,
        },
      ],
      links: {
        default_gbp_payout_account: "BA123",
        default_eur_payout_account: "BA456",
      },
    },
  ],
};

export const GET_CREDITORS_SUCCESS_RESPONSE = {
  creditors: {
    id: "CR123",
    created_at: "2017-02-16T12:34:56.000Z",
    name: "The Cheese Club",
    address_line1: "123 Street",
    address_line2: null,
    address_line3: null,
    city: "London",
    region: null,
    postal_code: "E2 8DP",
    country_code: "GB",
    logo_url: null,
    verification_status: "successful",
    can_create_refunds: false,
    scheme_identifiers: [
      {
        name: "GoCardless",
        scheme: "bacs",
        reference: "420042",
        minimum_advance_notice: 3,
        currency: "GBP",
        address_line1: "338 Goswell Road",
        address_line2: null,
        address_line3: null,
        city: "London",
        region: null,
        postal_code: "EC1V 7LQ",
        country_code: "GB",
        email: "help@gocardless.com",
        phone_number: "+44 20 7183 8674",
        can_specify_mandate_reference: false,
      },
    ],
    links: {
      default_gbp_payout_account: "BA123",
      default_eur_payout_account: "BA456",
    },
  },
};

export const UPDATE_CREDITORS_SUCCESS_RESPONSE = {
  creditors: {
    id: "CR123",
    created_at: "2017-02-16T12:34:56.000Z",
    name: "The Wine Club",
    address_line1: "123 Street",
    address_line2: null,
    address_line3: null,
    city: "London",
    region: null,
    postal_code: "E2 8DP",
    country_code: "GB",
    logo_url: null,
    verification_status: "successful",
    can_create_refunds: false,
    scheme_identifiers: [
      {
        name: "GoCardless",
        scheme: "bacs",
        reference: "420042",
        minimum_advance_notice: 3,
        currency: "GBP",
        address_line1: "338 Goswell Road",
        address_line2: null,
        address_line3: null,
        city: "London",
        region: null,
        postal_code: "EC1V 7LQ",
        country_code: "GB",
        email: "help@gocardless.com",
        phone_number: "+44 20 7183 8674",
        can_specify_mandate_reference: false,
      },
    ],
    links: {
      default_gbp_payout_account: "BA789",
      default_eur_payout_account: "BA456",
    },
  },
};

export const LIST_CREDITORS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_CREDITORS_CORRECT_REQUEST = {
  params: {
    name: "Nude Wines",
    links: {
      default_gbp_payout_account: "BA789",
    },
  },
};
