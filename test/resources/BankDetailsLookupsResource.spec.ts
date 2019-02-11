import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src/gocardless-pro-node";

import {
  CREATE_BANK_DETAILS_LOOKUPS_CORRECT_REQUEST,
  CREATE_BANK_DETAILS_LOOKUPS_SUCCESS_RESPONSE,
} from "../helpers/resources/BankDetailsLookupsHelper";

describe("BankDetailsLookupsResource", () => {
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
        JSON.stringify(CREATE_BANK_DETAILS_LOOKUPS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.bank_details_lookups.create(
        CREATE_BANK_DETAILS_LOOKUPS_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.bank_details_lookups.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.bank_details_lookups.wrapParams(
            CREATE_BANK_DETAILS_LOOKUPS_CORRECT_REQUEST,
          ).length,
          "Content-Type": "application/json",
          "GoCardless-Version": client.version,
        },
      });
    });
  });
});
