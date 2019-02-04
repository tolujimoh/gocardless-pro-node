import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import gocardless from "../../lib/gocardless";

import {
  CREATE_REFUNDS_CORRECT_REQUEST,
  CREATE_REFUNDS_SUCCESS_RESPONSE,
  GET_REFUNDS_SUCCESS_RESPONSE,
  LIST_REFUNDS_CORRECT_REQUEST,
  LIST_REFUNDS_SUCCESS_RESPONSE,
  UPDATE_REFUNDS_CORRECT_REQUEST,
  UPDATE_REFUNDS_SUCCESS_RESPONSE,
} from "../helpers/resources/RefundsHelper";

const SANDBOX_ACCESS_TOKEN = "sandbox_2hcd-Pd2U1jtAmOtusu51WIgTu8IHJ96qlFD1wSh";

describe("RefundsResource", () => {
  let client: any;
  let httpsStub: any;
  beforeEach(() => {
    httpsStub = sinon.stub(https, "request");
    client = new gocardless.Client({
      access_token: SANDBOX_ACCESS_TOKEN,
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
      response.write(JSON.stringify(CREATE_REFUNDS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.refunds.create(CREATE_REFUNDS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.refunds.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.refunds.wrapParams(
            CREATE_REFUNDS_CORRECT_REQUEST,
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
      response.write(JSON.stringify(LIST_REFUNDS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.refunds.list(LIST_REFUNDS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.refunds.resourceName}?${client.refunds.buildQuery(
          LIST_REFUNDS_CORRECT_REQUEST,
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
      response.write(JSON.stringify(GET_REFUNDS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.refunds.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.refunds.resourceName}/CR123`,
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
      response.write(JSON.stringify(UPDATE_REFUNDS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.refunds.update("CR123", UPDATE_REFUNDS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.refunds.resourceName}/CR123`,
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.refunds.wrapParams(
            UPDATE_REFUNDS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
