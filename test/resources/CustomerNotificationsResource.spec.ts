import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src/gocardless-pro-node"

import { HANDLE_CUSTOMER_NOTIFICATIONS_SUCCESS_RESPONSE } from "../helpers/resources/CustomerNotificationsHelper";

describe("CustomerNotificationsResource", () => {
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
  describe("handle", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(
        JSON.stringify(HANDLE_CUSTOMER_NOTIFICATIONS_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.customer_notifications.handle("CR123");

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.customer_notifications.resourceName
        }/CR123/actions/handle`,
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
