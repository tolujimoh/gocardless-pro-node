import {
  ClientConfigWithBaseUrl,
  ClientConfigWithEnvironment,
  ClientInteface,
  Environment,
} from "./types/client";

import {
  GOCARDLESS_API_DEFAULT_TIMEOUT,
  GOCARDLESS_API_VERSION,
  LIVE_ENIVIRONMENT_URL,
  SANDBOX_ENIVIRONMENT_URL,
} from "./Constants";

class Client {
  set environment(environment: Environment) {
    this.host = Client.getHostByEnvironment(environment);
    this._environment = environment;
  }

  get environment(): Environment {
    return this._environment;
  }

  set version(version: string) {
    this._version = version;
  }

  get version(): string {
    return this._version;
  }

  set timeout(timeout: number) {
    this._timeout = timeout;
  }

  get timeout(): number {
    return this._timeout;
  }

  set auth(token: string) {
    this._auth = `Bearer ${token}`;
  }

  get auth(): string {
    return this._auth;
  }

  set host(host: string) {
    this._host = host;
  }

  get host(): string {
    return this._host;
  }

  public static getHostByEnvironment(environment: Environment): string {
    if (environment === "live") {
      return LIVE_ENIVIRONMENT_URL;
    }

    // environment === "sandbox"
    return SANDBOX_ENIVIRONMENT_URL;
  }

  private _auth: string = "";
  private _host: string = "";
  private _environment: Environment = "sandbox";
  private _version: string = GOCARDLESS_API_VERSION;
  private _timeout: number = GOCARDLESS_API_DEFAULT_TIMEOUT;

  constructor(
    private clientConfig: ClientConfigWithEnvironment | ClientConfigWithBaseUrl,
  ) {
    this.verifyConfig(clientConfig);

    const { access_token } = clientConfig;

    if ("environment" in clientConfig) {
      const { environment } = clientConfig;
      this.environment = environment;
      this.host = Client.getHostByEnvironment(environment);
    } else if ("base_url" in clientConfig) {
      const { base_url } = clientConfig;
      this.environment = "sandbox";
      this.host = base_url;
    }

    this.auth = access_token;
  }

  private verifyConfig(
    clientConfig: ClientConfigWithEnvironment | ClientConfigWithBaseUrl,
  ) {
    if (typeof clientConfig === "undefined") {
      throw new Error("Config is required");
    }

    if (typeof clientConfig !== "object") {
      throw new Error("Expected Object for Config");
    }

    if (!("access_token" in clientConfig)) {
      throw new Error("access_token is required");
    }
    if (!("environment" in clientConfig) && !("base_url" in clientConfig)) {
      throw new Error("environment or base_url is required");
    }
  }
}

export default Client;
