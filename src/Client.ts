import CreditorBankAccountResource from "./resources/CreditorBankAccountResource";
import CreditorsResource from "./resources/CreditorsResource";
import CustomerBankAccountsResource from "./resources/CustomerBankAccountsResource";
import CustomerNotificationsResource from "./resources/CustomerNotificationsResource";
import CustomersResource from "./resources/CustomersResource";
import EventsResource from "./resources/EventsResource";
import MandateImportEntriesResource from "./resources/MandateImportEntriesResource";
import MandateImportsResource from "./resources/MandateImportsResource";
import MandatesResource from "./resources/MandatesResource";
import PaymentsResource from "./resources/PaymentsResource";
import PayoutItemsResource from "./resources/PayoutItemsResource";
import PayoutsResource from "./resources/PayoutsResource";
import RedirectFlowsResource from "./resources/RedirectFlowsResource";
import RefundsResource from "./resources/RefundsResource";
import SubscriptionsResource from "./resources/SubscriptionsResource";

import {
  ClientConfigWithBaseUrl,
  ClientConfigWithEnvironment,
  ClientInteface,
  Environment,
} from "./types/client";
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
} from "./types/resources";

import { Creditors } from "./types/resources/Creditors";
import { RedirectFlows } from "./types/resources/RedirectFlows";

import {
  GOCARDLESS_API_DEFAULT_TIMEOUT,
  GOCARDLESS_API_VERSION,
  LIVE_ENIVIRONMENT_URL,
  SANDBOX_ENIVIRONMENT_URL,
} from "./Constants";

class Client implements ClientInteface {
  set environment(environment: Environment) {
    this.host = Client.getHostByEnvironment(environment);
    this._environment = environment;
  }

  get environment(): Environment {
    return this._environment;
  }

  set version(version: string) {
    this._version = version;
  }

  get version(): string {
    return this._version;
  }

  set timeout(timeout: number) {
    this._timeout = timeout;
  }

  get timeout(): number {
    return this._timeout;
  }

  set auth(token: string) {
    this._auth = `Bearer ${token}`;
  }

  get auth(): string {
    return this._auth;
  }

  set host(host: string) {
    this._host = host;
  }

  get host(): string {
    return this._host;
  }

  public static getHostByEnvironment(environment: Environment): string {
    if (environment === "live") {
      return LIVE_ENIVIRONMENT_URL;
    }

    // environment === "sandbox"
    return SANDBOX_ENIVIRONMENT_URL;
  }
  public creditor_bank_account: CreditorBankAccount;
  public creditors: Creditors;
  public customer_bank_accounts: CustomerBankAccounts;
  public customer_notifications: CustomerNotifications;
  public customers: Customers;
  public events: Events;
  public mandate_import_entries: MandateImportEntries;
  public mandate_imports: MandateImports;
  public mandates: Mandates;
  public payments: Payments;
  public payout_items: PayoutItems;
  public payouts: Payouts;
  public redirect_flows: RedirectFlows;
  public refunds: Refunds;
  public subscriptions: Subscriptions;

  private _auth: string = "";
  private _host: string = "";
  private _environment: Environment = "sandbox";
  private _version: string = GOCARDLESS_API_VERSION;
  private _timeout: number = GOCARDLESS_API_DEFAULT_TIMEOUT;

  constructor(
    private clientConfig: ClientConfigWithEnvironment | ClientConfigWithBaseUrl,
  ) {
    this.verifyConfig(clientConfig);

    const { access_token } = clientConfig;

    if ("environment" in clientConfig) {
      const { environment } = clientConfig;
      this.environment = environment;
      this.host = Client.getHostByEnvironment(environment);
    } else if ("base_url" in clientConfig) {
      const { base_url } = clientConfig;
      this.environment = "sandbox";
      this.host = base_url;
    }

    this.auth = access_token;

    this.creditor_bank_account = new CreditorBankAccountResource(this);
    this.creditors = new CreditorsResource(this);
    this.customer_bank_accounts = new CustomerBankAccountsResource(this);
    this.customer_notifications = new CustomerNotificationsResource(this);
    this.customers = new CustomersResource(this);
    this.events = new EventsResource(this);
    this.mandate_import_entries = new MandateImportEntriesResource(this);
    this.mandate_imports = new MandateImportsResource(this);
    this.mandates = new MandatesResource(this);
    this.payments = new PaymentsResource(this);
    this.payout_items = new PayoutItemsResource(this);
    this.payouts = new PayoutsResource(this);
    this.redirect_flows = new RedirectFlowsResource(this);
    this.refunds = new RefundsResource(this);
    this.subscriptions = new SubscriptionsResource(this);
  }

  private verifyConfig(
    clientConfig: ClientConfigWithEnvironment | ClientConfigWithBaseUrl,
  ) {
    if (typeof clientConfig === "undefined") {
      throw new Error("Config is required");
    }

    if (typeof clientConfig !== "object") {
      throw new Error("Expected Object for Config");
    }

    if (!("access_token" in clientConfig)) {
      throw new Error("access_token is required");
    }
    if (!("environment" in clientConfig) && !("base_url" in clientConfig)) {
      throw new Error("environment or base_url is required");
    }
  }
}

export default Client;
