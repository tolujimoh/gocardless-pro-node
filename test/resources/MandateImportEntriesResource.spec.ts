import { expect } from "chai";
import https from "https";
import sinon from "sinon";
import { PassThrough } from "stream";
import * as gocardless from "../../src";

import {
  CREATE_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
  CREATE_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE,
  LIST_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
  LIST_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE,
} from "../helpers/resources/MandateImportEntriesHelper";

describe("MandateImportEntriesResource", () => {
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
        JSON.stringify(CREATE_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_import_entries.create(
        CREATE_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${client.mandate_import_entries.resourceName}`,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": client.auth,
          "Content-Length": client.mandate_import_entries.wrapParams(
            CREATE_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
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
        JSON.stringify(LIST_MANDATE_IMPORT_ENTRIES_SUCCESS_RESPONSE),
      );
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
      client.mandate_import_entries.list(
        LIST_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
      );

      expect(httpsStub.args[0][0]).to.be.eql({
        hostname: client.host,
        port: 443,
        path: `/${
          client.mandate_import_entries.resourceName
        }?${client.mandate_import_entries.buildQuery(
          LIST_MANDATE_IMPORT_ENTRIES_CORRECT_REQUEST,
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
});
