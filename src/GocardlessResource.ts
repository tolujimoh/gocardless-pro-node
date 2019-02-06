import https, { RequestOptions } from "https";
import querystring from "querystring";

import Client from "./Client";
import { Params } from "./types/resources";

import GocardlessError from "./GocardlessError";

abstract class GocardlessResource {
  protected abstract resourceName: string;

  constructor(protected client: Client) {
    if (!(client instanceof Client)) {
      throw new Error(
        "GocardlessResource expects a vaild client instance to initialise class",
      );
    }
  }

  public makeRequest(options: RequestOptions, requestBody?: string) {
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);
        let resBody = "";

        res.on("data", (resChunk) => {
          resBody += resChunk;
        });

        res.on("end", () => {
          try {
            const parsedResBody: Object = JSON.parse(resBody);

            if ("error" in parsedResBody) {
              reject(new GocardlessError(parsedResBody[`error`]));
            } else {
              resolve(parsedResBody);
            }
          } catch ({ message }) {
            reject(
              new GocardlessError({
                message,
                type: "internal_server_error",
                code: 500,
              }),
            );
          }
        });
      });

      req.on("error", (e) => {
        reject(e);
      });

      if (requestBody) {
        req.write(requestBody);
      }

      req.end();
    });
  }

  public wrapParams(params: Params<Object> | Object): string {
    return JSON.stringify({
      [this.resourceName]: "params" in params ? params.params : params,
    });
  }

  public buildQuery(params: Params<Object> | Object): string {
    return querystring.stringify("params" in params ? params.params : params);
  }

  protected post(path: string, params?: Params<Object> | Object): any {
    let requestBody: string = "";

    if (params) {
      requestBody = this.wrapParams(params);
    }

    const { auth, host, version } = this.client;

    const options = {
      hostname: host,
      port: 443,
      path,
      method: "POST",
      headers: {
        "Authorization": auth,
        "GoCardless-Version": version,
        "Accept": "application/json",
        ...(requestBody
          ? {
              "Content-Type": "application/json",
              "Content-Length": requestBody.length,
            }
          : {}),
      },
    };

    return this.makeRequest(options, requestBody);
  }

  protected put(path: string, params?: Params<Object> | Object): any {
    let requestBody: string = "";

    if (params) {
      requestBody = this.wrapParams(params);
    }

    const { auth, host, version } = this.client;

    const options = {
      hostname: host,
      port: 443,
      path,
      method: "PUT",
      headers: {
        "Authorization": auth,
        "GoCardless-Version": version,
        "Accept": "application/json",
        ...(requestBody
          ? {
              "Content-Type": "application/json",
              "Content-Length": requestBody.length,
            }
          : {}),
      },
    };

    return this.makeRequest(options, requestBody);
  }

  protected get(path: string, params?: Params<any> | any): any {
    const { auth, host, version } = this.client;
    let queryParams = "";

    if (params) {
      queryParams = this.buildQuery(params);
      path += `?${queryParams}`;
    }

    const options = {
      hostname: host,
      port: 443,
      path,
      method: "GET",
      headers: {
        "Authorization": auth,
        "GoCardless-Version": version,
        "Accept": "application/json",
      },
    };

    return this.makeRequest(options);
  }

  // public create(params = {}) {
  //   return this.makeRequest("POST", `/${this.resourceName}`, params);
  // }

  // public list(params = {}) {
  //   return this.makeRequest("GET", `/${this.resourceName}`, params);
  // }

  // public get(resourceId) {
  //   return this.makeRequest("GET", `/${this.resourceName}/${resourceId}`);
  // }

  // public update(resourceId, params = {}) {
  //   return this.makeRequest(
  //     "PUT",
  //     `/${this.resourceName}/${resourceId}`,
  //     params,
  //   );
  // }

  // public disable(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/disable`,
  //   );
  // }

  // public handle(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/handle`,
  //   );
  // }

  // public cancel(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/cancel`,
  //   );
  // }

  // public reinstate(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/reinstate`,
  //   );
  // }

  // public submit(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/submit`,
  //   );
  // }

  // public retry(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/retry`,
  //   );
  // }

  // public complete(resourceId) {
  //   return this.makeRequest(
  //     "POST",
  //     `/${this.resourceName}/${resourceId}/actions/complete`,
  //   );
  // }
}

export default GocardlessResource;
