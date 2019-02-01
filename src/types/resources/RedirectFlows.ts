import { Params } from "../resources";

interface CreateRedirectFlowsRequest {
  /**  The customer’s session ID must be provided when the redirect flow is set up and again when it is completed. This allows integrators to ensure that the user who was originally sent to the GoCardless payment pages is the one who has completed them.
   */
  session_token: string;

  /**  The URL to redirect to upon successful mandate setup. You must use a URL beginning https in the live environment.
   */
  success_redirect_url: string;

  /**  A description of the item the customer is paying for. This will be shown on the hosted payment pages.
   */
  description?: string;

  prefilled_customer?: {
    /**  The first line of the customer’s address.
     */
    address_line1?: string;

    /** The second line of the customer’s address.
     */
    address_line2?: string;

    /**  The third line of the customer’s address.
     */
    address_line3?: string;

    /** The city of the customer’s address.
     */
    city?: string;

    /** Customer’s company name.
     */
    company_name?: string;

    /** ISO 3166-1 alpha-2 code.
     */
    country_code?: string;

    /** For Danish customers only. The civic/company number (CPR or CVR) of the customer.
     */
    danish_identity_number?: string;

    /** Customer’s email address.
     */
    email?: string;

    /** Customer’s surname.
     */
    family_name?: string;

    /** Customer’s first name.
     */
    given_name?: string;

    /** ISO 639-1 code.
     */
    language?: string;

    /** For New Zealand customers only.
     */
    phone_number?: string;

    /** The customer’s postal code.
     */
    postal_code?: string;

    /** The customer’s address region, county or department.
     */
    region?: string;

    /** For Swedish customers only. The civic/company number (personnummer, samordningsnummer, or organisationsnummer) of the customer.
     */
    swedish_identity_number?: string;
  };
  /** The Direct Debit scheme of the mandate. If specified, the payment pages will only allow the set-up of a mandate for the specified scheme. It is recommended that you leave this blank so the most appropriate scheme is picked based on the customer’s bank account.
   */
  scheme: string;

  link: {
    /** The creditor for whom the mandate will be created. The name of the creditor will be displayed on the payment page. Required if your account manages multiple creditors.
     */
    creditor: string;
  };
}

interface RedirectFlowsResponse {
  /** Unique identifier, beginning with “RE”.
   */
  id: string;

  /** The URL of a confirmation page, which you may optionally redirect the customer to rather than use your own page, that confirms in their chosen language that their Direct Debit has been set up successfully. Only returned once the customer has set up their mandate via the payment pages and the redirect flow has been completed, and only available for 15 minutes from when you complete the redirect flow. The structure of this URL may change at any time, so you should read it directly from the API response.
   */
  confirmation_url: string;
  /** Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /** A description of the item the customer is paying for. This will be shown on the hosted payment pages.
   */
  description: string;
  /** The URL of the hosted payment pages for this redirect flow. This is the URL you should redirect your customer to.
   */
  redirect_url: string;

  /** The Direct Debit scheme of the mandate. If specified, the payment pages will only allow the set-up of a mandate for the specified scheme. It is recommended that you leave this blank so the most appropriate scheme is picked based on the customer’s bank account.
   */
  scheme: string;

  /** The customer’s session ID must be provided when the redirect flow is set up and again when it is completed. This allows integrators to ensure that the user who was originally sent to the GoCardless payment pages is the one who has completed them.
   */
  session_token: string;
  /** The URL to redirect to upon successful mandate setup. You must use a URL beginning https in the live environment.
   */
  success_redirect_url: string;

  links: {
    /** The creditor for whom the mandate will be created. The name of the creditor will be displayed on the payment page.
     */
    creditor?: string;

    /** ID of customer created by this redirect flow.
     * Note: this property will not be present until the redirect flow has been successfully completed.
     */
    customer?: string;

    /** ID of customer bank account created by this redirect flow.
     * Note: this property will not be present until the redirect flow has been successfully completed.
     */
    customer_bank_account?: string;

    /** ID of mandate created by this redirect flow.
     * Note: this property will not be present until the redirect flow has been successfully completed.
     */
    mandate?: string;
  };
}

interface CompleteRedirectFlowsRequest {
  data: {
    session_token: string;
  };
}

interface CreateRedirectFlowsSuccessResponse {
  redirect_flows: RedirectFlowsResponse;
}

interface GetRedirectFlowsSuccessResponse {
  redirect_flows: RedirectFlowsResponse;
}

interface CompleteRedirectFlowsSuccessResponse {
  redirect_flows: RedirectFlowsResponse;
}

interface RedirectFlows {
  /**
   *
   *
   * @param {(CreateRedirectFlowsRequest | Params<CreateRedirectFlowsRequest>)} params
   * @returns {CreateRedirectFlowsSuccessResponse}
   * @memberof RedirectFlowsResource
   */
  create: (
    params: CreateRedirectFlowsRequest | Params<CreateRedirectFlowsRequest>,
  ) => CreateRedirectFlowsSuccessResponse;

  /**
   *
   *
   * @param {string} resourceId
   * @returns {GetRedirectFlowsSuccessResponse}
   * @memberof RedirectFlowsResource
   */
  get: (resourceId: string) => GetRedirectFlowsSuccessResponse;

  /**
   *
   *
   * @param {string} resourceId
   * @param {(CompleteRedirectFlowsRequest | Params<CompleteRedirectFlowsRequest>)} params
   * @returns {CompleteRedirectFlowsSuccessResponse}
   * @memberof RedirectFlowsResource
   */
  complete: (
    resourceId: string,
    params: CompleteRedirectFlowsRequest | Params<CompleteRedirectFlowsRequest>,
  ) => CompleteRedirectFlowsSuccessResponse;
}

export {
  CreateRedirectFlowsRequest,
  CompleteRedirectFlowsRequest,
  CreateRedirectFlowsSuccessResponse,
  GetRedirectFlowsSuccessResponse,
  CompleteRedirectFlowsSuccessResponse,
  RedirectFlows,
};
