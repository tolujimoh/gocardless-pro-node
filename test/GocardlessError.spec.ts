import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";

import Client from "../src/Client";
import * as gocardless from "../src/gocardless-pro-node";
import GocardlessError from "../src/GocardlessError";

import {
  CREATE_CREDITOR_BANK_ACCOUNT_HTTP_409_REQUEST,
  CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_400_REQUEST,
  CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_422_REQUEST,
  HTTP_400_RESPONSE,
  HTTP_409_RESPONSE,
  HTTP_422_RESPONSE,
} from "./helpers/errorsHelper";

describe("GocardlessError", () => {
  let client: Client;
  let httpStub: any;

  before(() => {
    client = new gocardless.Client({
      access_token: process.env.SANDBOX_ACCESS_TOKEN || "",
      environment: "sandbox",
    });

    httpStub = sinon.stub(https, "request");
  });
  after(() => {
    httpStub.restore();
  });

  it("it populates GocardlessError with all the parameters", () => {
    const errorObject = {
      documentation_url:
        "https://developer.gocardless.com/api-reference#customer_deletion_requested",
      message: "This data has been deleted at the request of the customer",
      type: "invalid_api_usage",
      errors: [
        {
          reason: "customer_deletion_requested",
          message: "This data has been deleted at the request of the customer",
        },
      ],
      code: 410,
      request_id: "deadbeef-0000-4000-0000-444400004444",
    };
    const e = new GocardlessError(errorObject);

    expect(e.message).to.be.equal(errorObject.message);
    expect(e.code).to.be.equal(errorObject.code);
    expect(e.type).to.be.equal(errorObject.type);
    expect(e.documentation_url).to.be.equal(errorObject.documentation_url);
    expect(e.errors).to.be.eql(errorObject.errors);
    expect(e.request_id).to.be.equal(errorObject.request_id);
  });

  it("it populates GocardlessError missing parameters with default values", () => {
    const errorObject = {
      message: "Unable to send request",
      type: "internal_server_error",
      code: 500,
    };
    const e = new GocardlessError(errorObject);

    expect(e.message).to.be.equal(errorObject.message);
    expect(e.code).to.be.equal(errorObject.code);
    expect(e.type).to.be.equal(errorObject.type);
    expect(e.documentation_url).to.be.equal("");
    expect(e.errors).to.be.eql([]);
    expect(e.request_id).to.be.equal("");
  });

  describe("returns HTTP 422 response", () => {
    it("throws an error with instance of Gocardless Error", () => {
      const request: PassThrough = new PassThrough();
      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(HTTP_422_RESPONSE));
      response.end();

      httpStub.callsArgWith(1, response).returns(request);

      return expect(
        client.customer_bank_accounts.create(
          CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_422_REQUEST,
        ),
      ).to.be.rejectedWith(GocardlessError, "Validation failed");
    });
  });
  describe("returns HTTP 400 response", () => {
    it("throws an error with instance of Gocardless Error", () => {
      const request: PassThrough = new PassThrough();
      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(HTTP_400_RESPONSE));
      response.end();

      httpStub.callsArgWith(1, response).returns(request);

      return expect(
        client.customer_bank_accounts.create(
          CREATE_CUSTOMER_BANK_ACCOUNT_HTTP_400_REQUEST,
        ),
      ).to.be.rejectedWith(GocardlessError, "Invalid document structure");
    });
  });
  describe("returns HTTP 409 response", () => {
    it("throws an error with instance of Gocardless Error", () => {
      const request: PassThrough = new PassThrough();
      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(HTTP_409_RESPONSE));
      response.end();

      httpStub.callsArgWith(1, response).returns(request);

      return expect(
        client.creditor_bank_accounts.create(
          CREATE_CREDITOR_BANK_ACCOUNT_HTTP_409_REQUEST,
        ),
      ).to.be.rejectedWith(GocardlessError, "Bank account already exists");
    });
  });
});
