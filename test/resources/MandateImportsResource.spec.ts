import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src/gocardless-pro-node"

import {
  CANCEL_MANDATE_IMPORTS_SUCCESS_RESPONSE,
  CREATE_MANDATE_IMPORTS_CORRECT_REQUEST,
  CREATE_MANDATE_IMPORTS_SUCCESS_RESPONSE,
  GET_MANDATE_IMPORTS_SUCCESS_RESPONSE,
  SUBMIT_MANDATE_IMPORTS_SUCCESS_RESPONSE,
} from "../helpers/resources/MandateImportsHelper";

describe("MandateImportsResource", () => {
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
      response.write(JSON.stringify(CREATE_MANDATE_IMPORTS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_imports.create(CREATE_MANDATE_IMPORTS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandate_imports.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandate_imports.wrapParams(
            CREATE_MANDATE_IMPORTS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });

  describe("cancel", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(CANCEL_MANDATE_IMPORTS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_imports.cancel("CRR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandate_imports.resourceName}/CRR123/actions/cancel`,
        method: "POST",
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
      response.write(JSON.stringify(GET_MANDATE_IMPORTS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_imports.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandate_imports.resourceName}/CR123`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("submit", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(SUBMIT_MANDATE_IMPORTS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_imports.submit("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandate_imports.resourceName}/CR123/actions/submit`,
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
