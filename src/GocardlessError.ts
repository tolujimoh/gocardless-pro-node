import { GocardlessErrorObject } from "./types/errors";

class GocardlessError extends Error {
  private _type: string;
  private _code: number;
  private _request_id: string;
  private _documentation_url: string;
  private _errors: Object[];

  constructor({
    message,
    type,
    code,
    request_id = "",
    documentation_url = "",
    errors = [],
  }: GocardlessErrorObject) {
    super(message);

    this._type = type;
    this._code = code;
    this._request_id = request_id;
    this._documentation_url = documentation_url;
    this._errors = errors;
  }

  get type(): string {
    return this._type;
  }

  get code(): number {
    return this._code;
  }

  get request_id(): string {
    return this._request_id;
  }

  get documentation_url(): string {
    return this._documentation_url;
  }

  get errors(): object[] {
    return this._errors;
  }
}

export default GocardlessError;
