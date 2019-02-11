import { EventEmitter } from "events";

import BankDetailsLookupsResource from "./resources/BankDetailsLookupsResource";
import CreditorBankAccountsResource from "./resources/CreditorBankAccountsResource";
import CreditorsResource from "./resources/CreditorsResource";
import CustomerBankAccountsResource from "./resources/CustomerBankAccountsResource";
import CustomerNotificationsResource from "./resources/CustomerNotificationsResource";
import CustomersResource from "./resources/CustomersResource";
import EventsResource from "./resources/EventsResource";
import MandateImportEntriesResource from "./resources/MandateImportEntriesResource";
import MandateImportsResource from "./resources/MandateImportsResource";
import MandatePdfsResource from "./resources/MandatePdfsResource";
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

import { BankDetailsLookups } from "./types/resources/BankDetailsLookups";
import { CreditorBankAccounts } from "./types/resources/CreditorBankAccounts";
import { Creditors } from "./types/resources/Creditors";
import { CustomerBankAccounts } from "./types/resources/CustomerBankAccounts";
import { CustomerNotifications } from "./types/resources/CustomerNotifications";
import { Customers } from "./types/resources/Customers";
import { Events } from "./types/resources/Events";
import { MandateImportEntries } from "./types/resources/MandateImportEntries";
import { MandateImports } from "./types/resources/MandateImports";
import { MandatePdfs } from "./types/resources/MandatePdfs";
import { Mandates } from "./types/resources/Mandates";
import { Payments } from "./types/resources/Payments";
import { PayoutItems } from "./types/resources/PayoutItems";
import { Payouts } from "./types/resources/Payouts";
import { RedirectFlows } from "./types/resources/RedirectFlows";
import { Refunds } from "./types/resources/Refunds";
import { Subscriptions } from "./types/resources/Subscriptions";

import {
  GOCARDLESS_API_DEFAULT_TIMEOUT,
  GOCARDLESS_API_VERSION,
  LIVE_ENIVIRONMENT_URL,
  SANDBOX_ENIVIRONMENT_URL,
} from "./Constants";

class Client extends EventEmitter implements ClientInteface {
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
  public creditor_bank_accounts: CreditorBankAccounts;
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
  public bank_details_lookups: BankDetailsLookups;
  public mandate_pdfs: MandatePdfs;

  private _auth: string = "";
  private _host: string = "";
  private _environment: Environment = "sandbox";
  private _version: string = GOCARDLESS_API_VERSION;
  private _timeout: number = GOCARDLESS_API_DEFAULT_TIMEOUT;

  constructor(
    private clientConfig: ClientConfigWithEnvironment | ClientConfigWithBaseUrl,
  ) {
    super();

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

    this.creditor_bank_accounts = new CreditorBankAccountsResource(this);
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
    this.bank_details_lookups = new BankDetailsLookupsResource(this);
    this.mandate_pdfs = new MandatePdfsResource(this);
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
