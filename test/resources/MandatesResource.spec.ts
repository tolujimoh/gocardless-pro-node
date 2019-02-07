import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src/gocardless-pro-node"

import {
  CANCEL_MANDATES_CORRECT_REQUEST,
  CANCEL_MANDATES_SUCCESS_RESPONSE,
  CREATE_MANDATES_CORRECT_REQUEST,
  CREATE_MANDATES_SUCCESS_RESPONSE,
  GET_MANDATES_SUCCESS_RESPONSE,
  LIST_MANDATES_CORRECT_REQUEST,
  LIST_MANDATES_SUCCESS_RESPONSE,
  REINSTATE_MANDATES_CORRECT_REQUEST,
  REINSTATE_MANDATES_SUCCESS_RESPONSE,
  UPDATE_MANDATES_CORRECT_REQUEST,
  UPDATE_MANDATES_SUCCESS_RESPONSE,
} from "../helpers/resources/MandatesHelper";

describe("MandatesResource", () => {
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
      response.write(JSON.stringify(CREATE_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.create(CREATE_MANDATES_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandates.wrapParams(
            CREATE_MANDATES_CORRECT_REQUEST,
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
      response.write(JSON.stringify(LIST_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.list(LIST_MANDATES_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}?${client.mandates.buildQuery(
          LIST_MANDATES_CORRECT_REQUEST,
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
      response.write(JSON.stringify(GET_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}/CR123`,
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
      response.write(JSON.stringify(UPDATE_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.update("CR123", UPDATE_MANDATES_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}/CR123`,
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandates.wrapParams(
            UPDATE_MANDATES_CORRECT_REQUEST,
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
      response.write(JSON.stringify(CANCEL_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.cancel("CR123", CANCEL_MANDATES_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}/CR123/actions/cancel`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandates.wrapParams(
            CANCEL_MANDATES_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("reinstate", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(REINSTATE_MANDATES_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandates.reinstate("CR123", REINSTATE_MANDATES_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandates.resourceName}/CR123/actions/reinstate`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandates.wrapParams(
            REINSTATE_MANDATES_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
