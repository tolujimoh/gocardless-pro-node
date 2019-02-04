import { CreditorBankAccounts } from "./resources/CreditorBankAccounts";
import { Creditors } from "./resources/Creditors";
import { CustomerBankAccounts } from "./resources/CustomerBankAccounts";
import { CustomerNotifications } from "./resources/CustomerNotifications";
import { Customers } from "./resources/Customers";
import { Events } from "./resources/Events";
import { MandateImportEntries } from "./resources/MandateImportEntries";
import { MandateImports } from "./resources/MandateImports";
import { Mandates } from "./resources/Mandates";
import { Payments } from "./resources/Payments";
import { PayoutItems } from "./resources/PayoutItems";
import { Payouts } from "./resources/Payouts";
import { RedirectFlows } from "./resources/RedirectFlows";
import { Refunds } from "./resources/Refunds";
import { Subscriptions } from "./resources/Subscriptions";

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
  creditor_bank_accounts: CreditorBankAccounts;
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
