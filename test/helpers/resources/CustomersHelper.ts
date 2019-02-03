export const CREATE_CUSTOMERS_CORRECT_REQUEST = {
  params: {
    email: "user@example.com",
    given_name: "Frank",
    family_name: "Osborne",
    address_line1: "27 Acer Road",
    address_line2: "Apt 2",
    city: "London",
    postal_code: "E8 3GX",
    country_code: "GB",
    metadata: {
      salesforce_id: "ABCD1234",
    },
  },
};

export const CREATE_CUSTOMERS_SUCCESS_RESPONSE = {
  customers: {
    id: "CU123",
    created_at: "2014-05-08T17:01:06.000Z",
    email: "user@example.com",
    given_name: "Frank",
    family_name: "Osborne",
    address_line1: "27 Acer Road",
    address_line2: "Apt 2",
    address_line3: null,
    city: "London",
    region: null,
    postal_code: "E8 3GX",
    country_code: "GB",
    language: "en",
    phone_number: null,
    swedish_identity_number: null,
    danish_identity_number: null,
    metadata: {
      salesforce_id: "ABCD1234",
    },
  },
};

export const LIST_CUSTOMERS_SUCCESS_RESPONSE = {
  meta: {
    cursors: {
      before: "CU000",
      after: "CU456",
    },
    limit: 50,
  },
  customers: [
    {
      id: "CU123",
      created_at: "2014-05-08T17:01:06.000Z",
      email: "user@example.com",
      given_name: "Frank",
      family_name: "Osborne",
      address_line1: "27 Acer Road",
      address_line2: "Apt 2",
      address_line3: null,
      city: "London",
      region: null,
      postal_code: "E8 3GX",
      country_code: "GB",
      language: "en",
      metadata: {
        salesforce_id: "ABCD1234",
      },
    },
  ],
};

export const GET_CUSTOMERS_SUCCESS_RESPONSE = {
  customers: {
    id: "CU123",
    created_at: "2014-05-08T17:01:06.000Z",
    email: "user@example.com",
    given_name: "Frank",
    family_name: "Osborne",
    address_line1: "27 Acer Road",
    address_line2: "Apt 2",
    address_line3: null,
    city: "London",
    region: null,
    postal_code: "E8 3GX",
    country_code: "GB",
    language: "en",
    phone_number: null,
    swedish_identity_number: null,
    danish_identity_number: null,
    metadata: {
      salesforce_id: "ABCD1234",
    },
  },
};

export const UPDATE_CUSTOMERS_SUCCESS_RESPONSE = {
  customers: {
    id: "CU123",
    created_at: "2014-05-08T17:01:06.000Z",
    email: "updated_user@example.com",
    given_name: "Frank",
    family_name: "Osborne",
    address_line1: "29 Acer Road",
    address_line2: "Apt 3",
    address_line3: "Block 4",
    city: "London",
    region: null,
    postal_code: "E8 3GX",
    country_code: "GB",
    language: "en",
    phone_number: null,
    swedish_identity_number: null,
    danish_identity_number: null,
    metadata: {
      salesforce_id: "EFGH5678",
    },
  },
};

export const LIST_CUSTOMERS_CORRECT_REQUEST = {
  params: {
    limit: 2,
  },
};

export const UPDATE_CUSTOMERS_CORRECT_REQUEST = {
  params: {
    email: "updated_user@example.com",
    given_name: "Jenny",
    family_name: "Osborne",
    metadata: {
      salesforce_id: "EFGH5678",
    },
  },
};
