import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src/gocardless-pro-node";

import {
  CREATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
  CREATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  DISABLE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  GET_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  LIST_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
  LIST_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  UPDATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
  UPDATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE,
} from "../helpers/resources/CustomerBankAccountsHelper";

describe("CustomerBankAccountsResource", () => {
  let client: any;
  let httpsStub: any;
  beforeEach(() => {
    httpsStub = sinon.stub(https, "request");
    client = new gocardless.Client({
      access_token: process.env.SANDBOX_ACCESS_TOKEN || "",
      environment: "sandbox",
    });
  });
  afterEach(() => {
    httpsStub.restore();
  });
  describe("create", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(CREATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_bank_accounts.create(
        CREATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.customer_bank_accounts.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.customer_bank_accounts.wrapParams(
            CREATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("list", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(LIST_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_bank_accounts.list(
        LIST_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.customer_bank_accounts.resourceName
        }?${client.customer_bank_accounts.buildQuery(
          LIST_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
        )}`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("get", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(GET_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_bank_accounts.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.customer_bank_accounts.resourceName}/CR123`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("update", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(UPDATE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_bank_accounts.update(
        "CR123",
        UPDATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.customer_bank_accounts.resourceName}/CR123`,
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.customer_bank_accounts.wrapParams(
            UPDATE_CUSTOMER_BANK_ACCOUNTS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("disable", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(DISABLE_CUSTOMER_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_bank_accounts.disable("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.customer_bank_accounts.resourceName
        }/CR123/actions/disable`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
