import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src";

import {
  CREATE_CREDITOR_BANK_ACCOUNTS_CORRECT_REQUEST,
  CREATE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  DISABLE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  GET_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE,
  LIST_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE,
} from "../helpers/resources/CreditorBankAccountsHelper";

describe("CreditorBankAccountsResource", () => {
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
        JSON.stringify(CREATE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);

      client.creditor_bank_accounts.create(
        CREATE_CREDITOR_BANK_ACCOUNTS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.creditor_bank_accounts.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.creditor_bank_accounts.wrapParams(
            CREATE_CREDITOR_BANK_ACCOUNTS_CORRECT_REQUEST,
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
        JSON.stringify(LIST_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.creditor_bank_accounts.list();

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.creditor_bank_accounts.resourceName}`,
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
        JSON.stringify(GET_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.creditor_bank_accounts.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.creditor_bank_accounts.resourceName}/CR123`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
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
        JSON.stringify(DISABLE_CREDITOR_BANK_ACCOUNTS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.creditor_bank_accounts.disable("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.creditor_bank_accounts.resourceName
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
