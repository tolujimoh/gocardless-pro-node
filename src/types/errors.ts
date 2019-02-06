interface GocardlessErrorObject {
  message: string;
  documentation_url?: string;
  type: string;
  request_id?: string;
  code: number;
  errors?: Object[];
}

export { GocardlessErrorObject };
