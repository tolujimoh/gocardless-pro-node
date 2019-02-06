import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src";

import {
  CANCEL_SUBSCRIPTIONS_CORRECT_REQUEST,
  CANCEL_SUBSCRIPTIONS_SUCCESS_RESPONSE,
  CREATE_SUBSCRIPTIONS_CORRECT_REQUEST,
  CREATE_SUBSCRIPTIONS_SUCCESS_RESPONSE,
  GET_SUBSCRIPTIONS_SUCCESS_RESPONSE,
  LIST_SUBSCRIPTIONS_CORRECT_REQUEST,
  LIST_SUBSCRIPTIONS_SUCCESS_RESPONSE,
  UPDATE_SUBSCRIPTIONS_CORRECT_REQUEST,
  UPDATE_SUBSCRIPTIONS_SUCCESS_RESPONSE,
} from "../helpers/resources/SubscriptionsHelper";

describe("SubscriptionsResource", () => {
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
      response.write(JSON.stringify(CREATE_SUBSCRIPTIONS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.subscriptions.create(CREATE_SUBSCRIPTIONS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.subscriptions.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.subscriptions.wrapParams(
            CREATE_SUBSCRIPTIONS_CORRECT_REQUEST,
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
      response.write(JSON.stringify(LIST_SUBSCRIPTIONS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.subscriptions.list(LIST_SUBSCRIPTIONS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.subscriptions.resourceName
        }?${client.subscriptions.buildQuery(
          LIST_SUBSCRIPTIONS_CORRECT_REQUEST,
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
      response.write(JSON.stringify(GET_SUBSCRIPTIONS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.subscriptions.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.subscriptions.resourceName}/CR123`,
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
      response.write(JSON.stringify(UPDATE_SUBSCRIPTIONS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.subscriptions.update(
        "CR123",
        UPDATE_SUBSCRIPTIONS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.subscriptions.resourceName}/CR123`,
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.subscriptions.wrapParams(
            UPDATE_SUBSCRIPTIONS_CORRECT_REQUEST,
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
      response.write(JSON.stringify(CANCEL_SUBSCRIPTIONS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.subscriptions.cancel(
        "CR123",
        CANCEL_SUBSCRIPTIONS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.subscriptions.resourceName}/CR123/actions/cancel`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.subscriptions.wrapParams(
            CANCEL_SUBSCRIPTIONS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
