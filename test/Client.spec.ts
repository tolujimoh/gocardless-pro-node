import { expect } from "chai";
import gocardless from "../src/goCardless";
import CreditorBankAccountResource from "../src/resources/CreditorBankAccountResource";
import CreditorsResource from "../src/resources/CreditorsResource";
import CustomerBankAccountsResource from "../src/resources/CustomerBankAccountsResource";
import CustomerNotificationsResource from "../src/resources/CustomerNotificationsResource";
import CustomersResource from "../src/resources/CustomersResource";
import EventsResource from "../src/resources/EventsResource";
import MandateImportEntriesResource from "../src/resources/MandateImportEntriesResource";
import MandateImportsResource from "../src/resources/MandateImportsResource";
import MandatesResource from "../src/resources/MandatesResource";
import PaymentsResource from "../src/resources/PaymentsResource";
import PayoutItemsResource from "../src/resources/PayoutItemsResource";
import PayoutsResource from "../src/resources/PayoutsResource";
import RedirectFlowsResource from "../src/resources/RedirectFlowsResource";
import RefundsResource from "../src/resources/RefundsResource";
import SubscriptionsResource from "../src/resources/SubscriptionsResource";
import {
  LIVE_ENIVIRONMENT_URL,
  SANDBOX_ENIVIRONMENT_URL,
} from "./../src/Constants";

const SANDBOX_ACCESS_TOKEN = "sandbox_2hcd-Pd2U1jtAmOtusu51WIgTu8IHJ96qlFD1wSh";

describe("Client", () => {
  describe("config", () => {
    describe("throws error", () => {
      let options: any;
      it("if no config is passed", () => {
        options = undefined;
        expect(() => new gocardless.Client(options)).to.throw(
          "Config is required",
        );
      });
      it("if config is not an object", () => {
        options = "no object";
        expect(() => new gocardless.Client(options)).to.throw(
          "Expected Object for Config",
        );
      });
      it("if config Object has no access_token property", () => {
        options = {};
        expect(() => new gocardless.Client(options)).to.throw(
          "access_token is required",
        );
      });
      it("if config Object has no enivronment and base_url properties", () => {
        options = {
          access_token: "",
        };
        expect(() => new gocardless.Client(options)).to.throw(
          "environment or base_url is required",
        );
      });
    });

    describe("if no errors", () => {
      let client: any;

      it("check auth is set", () => {
        client = new gocardless.Client({
          access_token: SANDBOX_ACCESS_TOKEN,
          environment: "sandbox",
        });
        expect(client.auth).to.be.equal(`Bearer ${SANDBOX_ACCESS_TOKEN}`);
      });

      describe("when environment is live", () => {
        before(() => {
          client = new gocardless.Client({
            access_token: SANDBOX_ACCESS_TOKEN,
            environment: "live",
          });
        });

        it("check host is live url", () => {
          expect(client.host).to.be.equal(LIVE_ENIVIRONMENT_URL);
        });

        it("check environment set to live", () => {
          expect(client.environment).to.be.equal("live");
        });
      });

      describe("when environment is sandbox", () => {
        before(() => {
          client = new gocardless.Client({
            access_token: SANDBOX_ACCESS_TOKEN,
            environment: "sandbox",
          });
        });

        it("check host is sandbox url", () => {
          expect(client.host).to.be.equal(SANDBOX_ENIVIRONMENT_URL);
        });
        it("check environment set to sandbox", () => {
          expect(client.environment).to.be.equal("sandbox");
        });
      });

      describe("when base_url provided", () => {
        const base_url: string = "https://localhost/gocardless";
        before(() => {
          client = new gocardless.Client({
            access_token: SANDBOX_ACCESS_TOKEN,
            base_url,
          });
        });

        it("check host is base url passed", () => {
          expect(client.host).to.be.equal(base_url);
        });

        it("check environment set to sandbox", () => {
          expect(client.environment).to.be.equal("sandbox");
        });
      });
    });
  });

  describe("getHostByEnvironment", () => {
    it("return Live url if environment is set to live", () => {
      expect(gocardless.Client.getHostByEnvironment("live")).to.be.equal(
        LIVE_ENIVIRONMENT_URL,
      );
    });
    it("return Sandbox url if environment is set to sandbox", () => {
      expect(gocardless.Client.getHostByEnvironment("sandbox")).to.be.equal(
        SANDBOX_ENIVIRONMENT_URL,
      );
    });
  });

  describe("setters / getters", () => {
    let client: any;
    before(() => {
      client = new gocardless.Client({
        access_token: SANDBOX_ACCESS_TOKEN,
        environment: "sandbox",
      });
    });

    describe("environment", () => {
      it("check setter / getter", () => {
        client.environment = "live";
        expect(client.environment).to.be.equal("live");
        expect(client.host).to.be.equal(LIVE_ENIVIRONMENT_URL);
      });
    });

    describe("version", () => {
      it("check setter / getter", () => {
        const version = "2015-04-29";
        client.version = version;
        expect(client.version).to.be.equal(version);
      });
    });

    describe("timeout", () => {
      it("check setter / getter", () => {
        const timeout = 3000;
        client.timeout = timeout;
        expect(client.timeout).to.be.equal(timeout);
      });
    });

    describe("auth", () => {
      it("check setter / getter", () => {
        client.auth = SANDBOX_ACCESS_TOKEN;
        expect(client.auth).to.be.equal(`Bearer ${SANDBOX_ACCESS_TOKEN}`);
      });
    });

    describe("host", () => {
      it("check setter / getter", () => {
        const host = "https://localhost/gocardless";
        client.host = host;
        expect(client.host).to.be.equal(host);
      });
    });
  });

  describe("loadResources", () => {
    let client: any;

    before(() => {
      client = new gocardless.Client({
        environment: "sandbox",
        access_token: SANDBOX_ACCESS_TOKEN,
      });
    });
    it("creditor_bank_account is loaded", () => {
      expect(client).to.have.property("creditor_bank_account");
      expect(client.creditor_bank_account).to.be.instanceof(
        CreditorBankAccountResource,
      );
    });
    it("creditors is loaded", () => {
      expect(client).to.have.property("creditors");
      expect(client.creditors).to.be.instanceof(CreditorsResource);
    });
    it("customer_bank_accounts is loaded", () => {
      expect(client).to.have.property("customer_bank_accounts");
      expect(client.customer_bank_accounts).to.be.instanceof(
        CustomerBankAccountsResource,
      );
    });
    it("customer_notifications is loaded", () => {
      expect(client).to.have.property("customer_notifications");
      expect(client.customer_notifications).to.be.instanceof(
        CustomerNotificationsResource,
      );
    });
    it("customers is loaded", () => {
      expect(client).to.have.property("customers");
      expect(client.customers).to.be.instanceof(CustomersResource);
    });
    it("events is loaded", () => {
      expect(client).to.have.property("events");
      expect(client.events).to.be.instanceof(EventsResource);
    });
    it("mandate_import_entries is loaded", () => {
      expect(client).to.have.property("mandate_import_entries");
      expect(client.mandate_import_entries).to.be.instanceof(
        MandateImportEntriesResource,
      );
    });
    it("mandate_imports is loaded", () => {
      expect(client).to.have.property("mandate_imports");
      expect(client.mandate_imports).to.be.instanceof(MandateImportsResource);
    });
    it("mandates is loaded", () => {
      expect(client).to.have.property("mandates");
      expect(client.mandates).to.be.instanceof(MandatesResource);
    });
    it("payments is loaded", () => {
      expect(client).to.have.property("payments");
      expect(client.payments).to.be.instanceof(PaymentsResource);
    });
    it("payout_items is loaded", () => {
      expect(client).to.have.property("payout_items");
      expect(client.payout_items).to.be.instanceof(PayoutItemsResource);
    });
    it("payouts is loaded", () => {
      expect(client).to.have.property("payouts");
      expect(client.payouts).to.be.instanceof(PayoutsResource);
    });
    it("redirect_flows is loaded", () => {
      expect(client).to.have.property("redirect_flows");
      expect(client.redirect_flows).to.be.instanceof(RedirectFlowsResource);
    });
    it("refunds is loaded", () => {
      expect(client).to.have.property("refunds");
      expect(client.refunds).to.be.instanceof(RefundsResource);
    });
    it("subscriptions is loaded", () => {
      expect(client).to.have.property("subscriptions");
      expect(client.subscriptions).to.be.instanceof(SubscriptionsResource);
    });
  });
});
