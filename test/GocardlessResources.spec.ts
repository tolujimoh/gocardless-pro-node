import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import https, { RequestOptions } from "https";
import querystring from "querystring";
import sinon, { SinonSpy } from "sinon";
import { PassThrough } from "stream";
import url from "url";
import Client from "../src/Client";
import * as gocardless from "../src/gocardless-pro-node";
import GocardlessResource from "../src/GocardlessResource";
import { Params } from "../src/types/resources";

chai.use(chaiAsPromised);

describe("GocardlessResources", () => {
  let client: Client;
  let ResourceClass: any;
  let resourceClass: any;

  let httpsStub: any;

  beforeEach(() => {
    httpsStub = sinon.stub(https, "request");
    client = new gocardless.Client({
      access_token: process.env.SANDBOX_ACCESS_TOKEN || "",
      environment: "sandbox",
    });

    ResourceClass = class extends GocardlessResource {
      public resourceName = "ResourceClass";

      // Expose Protected Class
      public post(path: string, params?: Params<any> | any): any {
        super.post(path, params);
      }

      // Expose Protected Class
      public put(path: string, params?: Params<any> | any): any {
        super.put(path, params);
      }

      // Expose Protected Class
      public get(path: string, params?: Params<any> | any): any {
        super.get(path, params);
      }
    };

    resourceClass = new ResourceClass(client);
    sinon.spy(resourceClass, "makeRequest");
  });

  afterEach(() => {
    resourceClass.makeRequest.restore();
    httpsStub.restore();
  });

  it("throw Error if class isn't initialised with instance of Client", () => {
    const notClient: String = "notClient";
    expect(() => new ResourceClass(notClient)).to.throw(
      "GocardlessResource expects a vaild client instance to initialise class",
    );
  });

  describe("makeRequest", () => {
    it("passes options to https library", async () => {
      const options: RequestOptions = {
        hostname: client.host,
        port: 443,
        path: "/",
        method: "POST",
        headers: {
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
          "Accept": "application/json",
        },
      };

      const resBody: Object = {};

      const request: PassThrough = new PassThrough();

      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(resBody));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);

      await resourceClass.makeRequest(options);

      expect(httpsStub.withArgs(options).calledOnce).to.be.true;
    });

    it("successful request returns a response Body", async () => {
      const options: RequestOptions = {
        hostname: client.host,
        port: 443,
        path: "/",
        method: "POST",
        headers: {
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
          "Accept": "application/json",
        },
      };

      const resBody: Object = {};

      const request: PassThrough = new PassThrough();

      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(resBody));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);

      return expect(resourceClass.makeRequest(options)).to.eventually.be.eql(
        resBody,
      );
    });

    it("unsuccesful request return an error body", async () => {
      const options: RequestOptions = {
        hostname: client.host,
        port: 443,
        path: "/",
        method: "POST",
        headers: {
          "Authorization": client.auth,
          "GoCardless-Version": client.version,
          "Accept": "application/json",
        },
      };

      const errorBody: Object = {};

      const request: PassThrough = new PassThrough();
      request.destroy(new Error(JSON.stringify(errorBody)));

      httpsStub.returns(request);

      return expect(resourceClass.makeRequest(options)).to.be.rejectedWith(
        JSON.stringify(errorBody),
      );
    });
  });

  describe("post", () => {
    beforeEach(() => {
      const resBody: Object = {};

      const request: PassThrough = new PassThrough();

      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(resBody));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
    });

    it("adds Authorization Header", () => {
      const params = {};
      resourceClass.post(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Authorization).to.be.equal(
        client.auth,
      );
    });

    it("adds GoCardless-Version Header", () => {
      const params = {};
      resourceClass.post(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["GoCardless-Version"]).to.be.equal(
        client.version,
      );
    });

    it("adds Accept Header", () => {
      const params = {};
      resourceClass.post(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Accept).to.be.equal(
        "application/json",
      );
    });

    it("adds Content-Type Header, if params is passed", () => {
      const params = {};
      resourceClass.post(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["Content-Type"]).to.be.equal(
        "application/json",
      );
    });

    it("adds Content-Length Header, if params is passed", () => {
      const params = {};
      resourceClass.post(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["Content-Length"]).to.be.greaterThan(
        JSON.stringify(params).length,
      );
    });

    it("wrap request body with resource name", () => {
      const params = {};

      resourceClass.post(`${resourceClass.resourceName}`, params);

      const requestBody = JSON.parse(resourceClass.makeRequest.args[0][1]);

      expect(requestBody).to.have.property(resourceClass.resourceName);
    });

    it("If params is wrapped in a params property, return inner object", () => {
      const params = {
        params: {
          id: 879879,
        },
      };
      resourceClass.post(`${resourceClass.resourceName}`, params);

      const requestBody = JSON.parse(resourceClass.makeRequest.args[0][1]);

      expect(requestBody[resourceClass.resourceName]).to.be.eql(params.params);
    });
  });
  describe("put", () => {
    beforeEach(() => {
      const resBody: Object = {};

      const request: PassThrough = new PassThrough();

      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(resBody));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
    });

    it("adds Authorization Header", () => {
      const params = {};
      resourceClass.put(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Authorization).to.be.equal(
        client.auth,
      );
    });

    it("adds GoCardless-Version Header", () => {
      const params = {};
      resourceClass.put(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["GoCardless-Version"]).to.be.equal(
        client.version,
      );
    });

    it("adds Accept Header", () => {
      const params = {};
      resourceClass.put(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Accept).to.be.equal(
        "application/json",
      );
    });

    it("adds Content-Type Header, if params is passed", () => {
      const params = {};
      resourceClass.put(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["Content-Type"]).to.be.equal(
        "application/json",
      );
    });

    it("adds Content-Length Header, if params is passed", () => {
      const params = {};
      resourceClass.put(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["Content-Length"]).to.be.greaterThan(
        JSON.stringify(params).length,
      );
    });

    it("wrap request body with resource name", () => {
      const params = {};

      resourceClass.put(`${resourceClass.resourceName}`, params);

      const requestBody = JSON.parse(resourceClass.makeRequest.args[0][1]);

      expect(requestBody).to.have.property(resourceClass.resourceName);
    });

    it("If params is wrapped in a params property, return inner object", () => {
      const params = {
        params: {
          id: 879879,
        },
      };
      resourceClass.put(`${resourceClass.resourceName}`, params);

      const requestBody = JSON.parse(resourceClass.makeRequest.args[0][1]);

      expect(requestBody[resourceClass.resourceName]).to.be.eql(params.params);
    });
  });
  describe("get", () => {
    beforeEach(() => {
      const resBody: Object = {};

      const request: PassThrough = new PassThrough();

      const response: PassThrough = new PassThrough();
      response.write(JSON.stringify(resBody));
      response.end();

      httpsStub.callsArgWith(1, response).returns(request);
    });

    it("adds Authorization Header", () => {
      const params = {};
      resourceClass.get(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Authorization).to.be.equal(
        client.auth,
      );
    });

    it("adds GoCardless-Version Header", () => {
      const params = {};
      resourceClass.get(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers["GoCardless-Version"]).to.be.equal(
        client.version,
      );
    });

    it("adds Accept Header", () => {
      const params = {};
      resourceClass.get(`${resourceClass.resourceName}`, params);
      expect(httpsStub.args[0][0].headers.Accept).to.be.equal(
        "application/json",
      );
    });

    it("Builds query string with parameters", () => {
      const params = {
        id: "3422",
        data: "3222",
      };

      resourceClass.get(`/${resourceClass.resourceName}`, params);
      expect(url.parse(httpsStub.args[0][0].path).query).to.be.equal(
        querystring.stringify(params),
      );
    });

    it("If params is wrapped in a params property, return inner object", () => {
      const params = {
        params: {
          id: 879879,
        },
      };
      resourceClass.get(`${resourceClass.resourceName}`, params);

      const urlQuery = url.parse(httpsStub.args[0][0].path).query;

      expect(urlQuery).to.be.equal(querystring.stringify(params.params));
    });
  });
});
