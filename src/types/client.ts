import {
  CreditorBankAccount,
  CustomerBankAccounts,
  CustomerNotifications,
  Customers,
  Events,
  MandateImportEntries,
  MandateImports,
  Mandates,
  Payments,
  PayoutItems,
  Payouts,
  Refunds,
  Subscriptions,
} from "./resources";

import { Creditors } from "./resources/Creditors";
import { RedirectFlows } from "./resources/RedirectFlows";

type Environment = "live" | "sandbox";

interface ClientConfigWithEnvironment {
  access_token: string;
  environment: Environment;
}

interface ClientConfigWithBaseUrl {
  access_token: string;
  base_url: string;
}

interface ClientAPI {
  auth: string;
  host: string;
  version: string;
  timeout: number;
  environment: string;
}

interface ClientInteface {
  creditor_bank_account: CreditorBankAccount;
  creditors: Creditors;
  customer_bank_accounts: CustomerBankAccounts;
  customer_notifications: CustomerNotifications;
  customers: Customers;
  events: Events;
  mandate_import_entries: MandateImportEntries;
  mandate_imports: MandateImports;
  mandates: Mandates;
  payments: Payments;
  payout_items: PayoutItems;
  payouts: Payouts;
  redirect_flows: RedirectFlows;
  refunds: Refunds;
  subscriptions: Subscriptions;
}

export {
  Environment,
  ClientConfigWithEnvironment,
  ClientConfigWithBaseUrl,
  ClientAPI,
  ClientInteface,
};
