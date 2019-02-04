import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import gocardless from "../../lib/gocardless";

import {
  COMPLETE_REDIRECT_FLOWS_CORRECT_REQUEST,
  COMPLETE_REDIRECT_FLOWS_SUCCESS_RESPONSE,
  CREATE_REDIRECT_FLOWS_CORRECT_REQUEST,
  CREATE_REDIRECT_FLOWS_SUCCESS_RESPONSE,
  GET_REDIRECT_FLOWS_SUCCESS_RESPONSE,
} from "../helpers/resources/RedirectFlowsHelper";

const SANDBOX_ACCESS_TOKEN = "sandbox_2hcd-Pd2U1jtAmOtusu51WIgTu8IHJ96qlFD1wSh";

describe("RedirectFlowsResource", () => {
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
      response.write(JSON.stringify(CREATE_REDIRECT_FLOWS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.redirect_flows.create(CREATE_REDIRECT_FLOWS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.redirect_flows.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.redirect_flows.wrapParams(
            CREATE_REDIRECT_FLOWS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("complete", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(COMPLETE_REDIRECT_FLOWS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.redirect_flows.complete(
        "CR123",
        COMPLETE_REDIRECT_FLOWS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.redirect_flows.resourceName}/CR123/actions/complete`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.redirect_flows.wrapParams(
            COMPLETE_REDIRECT_FLOWS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
  describe("get", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(GET_REDIRECT_FLOWS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.redirect_flows.get("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.redirect_flows.resourceName}/CR123`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
