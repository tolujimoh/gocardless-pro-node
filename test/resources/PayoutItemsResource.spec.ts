import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import gocardless from "../../lib/gocardless";

import {
  LIST_PAYOUT_ITEMS_CORRECT_REQUEST,
  LIST_PAYOUT_ITEMS_SUCCESS_RESPONSE,
} from "../helpers/resources/PayoutItemsHelper";

const SANDBOX_ACCESS_TOKEN = "sandbox_2hcd-Pd2U1jtAmOtusu51WIgTu8IHJ96qlFD1wSh";

describe("PayoutItemsResource", () => {
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

  describe("list", () => {
    it("sends correct request", () => {
      const request = new PassThrough();

      const response = new PassThrough();
      response.write(JSON.stringify(LIST_PAYOUT_ITEMS_SUCCESS_RESPONSE));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.payout_items.list(LIST_PAYOUT_ITEMS_CORRECT_REQUEST);

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.payout_items.resourceName
        }?${client.payout_items.buildQuery(LIST_PAYOUT_ITEMS_CORRECT_REQUEST)}`,
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
