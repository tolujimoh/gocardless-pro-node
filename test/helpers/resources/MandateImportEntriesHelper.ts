export const CREATE_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST = {
  mandate_import_entries: {
    links: {
      mandate_import: "IM000010790WX1",
    },
    record_identifier: "bank-file.xml/line-1",
    customer: {
      company_name: "Jane's widgets",
      email: "jane@janeswidgets.fr",
    },
    bank_account: {
      account_holder_name: "Jane Doe",
      iban: "FR14BARC20000055779911",
    },
    amendment: {
      original_mandate_reference: "REFNMANDATE",
      original_creditor_id: "FR123OTHERBANK",
      original_creditor_name: "Existing DD Provider",
    },
  },
};

export const CREATE_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE = {
  mandate_import_entries: {
    record_identifier: "bank-file.xml/line-1",
    created_at: "2018-03-03T00:00:00Z",
    links: {
      mandate_import: "IM000010790WX1",
    },
  },
};

export const LIST_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE = {
  mandate_import_entries: [
    {
      record_identifier: "bank-file.xml/line-2",
      created_at: "2018-03-03T00:00:01Z",
      links: {
        mandate_import: "IM000010790WX1",
      },
    },
    {
      record_identifier: "bank-file.xml/line-1",
      created_at: "2018-03-03T00:00:00Z",
      links: {
        mandate_import: "IM000010790WX1",
      },
    },
  ],
  meta: {
    cursors: {
      before: null,
      after: null,
    },
    limit: 50,
  },
};

export const LIST_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST = {
  mandate_imports: {
    mandate_import: "IM000010790WX1",
  },
};
