import { CursorOptions, CursorResponse, Params } from "../resources";

interface EventsResponse {
  /**
   * Unique identifier, beginning with “EV”.
   */
  id: string;

  /**
   * What has happened to the resource.
   */
  action: string;

  /**
   * Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   *  Present only in webhooks when an integrator is authorised to send their own notifications. See here for further information.

   Each instance will contain these properties:

   deadline: Time after which GoCardless will send the notification by email.

   id: The id of the notification.

   mandatory: Whether or not the notification must be sent.

   type: The type of notification the customer shall receive.
   */
  customer_notifications: string;

  details: {
    /**
     * What triggered the event. Note: cause is our simplified and predictable key indicating what triggered the event.
     */
    cause: string;

    /**
   * Human readable description of the cause. Note: Changes to event descriptions are not considered breaking.

   */
    description: string;

    /**
   * Who initiated the event. One of:
  bank: this event was triggered by a report from the banks

  gocardless: this event was performed by GoCardless automatically

  api: this event was triggered by an API endpoint

  customer: this event was triggered by a Events
   */
    origin: string;

    /**
   * Set when a bank is the origin of the event. This is the reason code received in the report from the customer’s bank. See the GoCardless Direct Debit guide for information on the meanings of different reason codes. Note: reason_code is payment scheme-specific and can be inconsistent between banks.

   */
    reason_code: string;

    /**
   * A Direct Debit scheme. Set when a bank is the origin of the event.

   */
    scheme: string;
  };

  /**
   * If the origin] is api, this will contain any metadata you specified when triggering this event. In other cases it will be an empty object.

   */
  metadata: Object;

  /**
   * The resource type for this event. One of:
  payments

  mandates

  payouts

  refunds

  subscriptions
   */
  resource_type: string;

  links: {
    /**
     * If resource_type is mandates, this is the ID of the mandate which has been updated.
     */
    mandate: string;

    /**
   * This is only included for mandate transfer events, when it is the ID of the customer bank account which the mandate is being transferred to.

   */
    new_customer_bank_account: string;
    /**
     * This is only included for mandate replaced events, when it is the ID of the new mandate that replaces the existing mandate.
     */
    new_mandate: string;

    /**
     * If the event is included in a webhook to an OAuth app, this is the ID of the account to which it belongs.
     */
    organisation: string;

    /**
   * If this event was caused by another, this is the ID of the cause. For example, if a mandate is cancelled it automatically cancels all pending payments associated with it; in this case, the payment cancellation events would have the ID of the mandate cancellation event in this field.

   */
    parent_event: string;

    /**
   * If resource_type is payments, this is the ID of the payment which has been updated.

   */
    payment: string;

    /**
     * If resource_type is payouts, this is the ID of the payout which has been updated.
     */
    payout: string;

    /**
   * This is only included for mandate transfer events, when it is the ID of the customer bank account which the mandate is being transferred from.

   */
    previous_customer_bank_account: string;

    /**
   * If resource_type is refunds, this is the ID of the refund which has been updated.

   */
    refund: string;
    /**
   * If resource_type is subscription, this is the ID of the subscription which has been updated.

   */
    subscription: string;
  };
}

interface ListEventsRequest extends CursorOptions {
  /** Limit to events with a given action.

   */
  action?: string;

  /** Includes linked resources in the response. Must be used with the resource_type parameter specified. The include should be one of:
payment

mandate

payout

refund

subscription

   */
  include?: string;

  /** ID of a mandate. If specified, this endpoint will return all events for the given mandate.

   */
  mandate?: string;

  /** ID of an event. If specified, this endpint will return all events whose parent_event is the given event ID.

   */
  parent_event?: string;

  /** ID of a payment. If specified, this endpoint will return all events for the given payment.

   */
  payment?: string;

  /** ID of a payout. If specified, this endpoint will return all events for the given payout.

   */
  payout?: string;

  /** ID of a refund. If specified, this endpoint will return all events for the given refund.

   */
  refund?: string;

  /** Type of resource that you’d like to get all events for. Cannot be used together with the payment, mandate, subscription, refund or payout parameter. The type can be one of:
payments

mandates

payouts

subscriptions

refunds

   */
  resource_type?: string;

  /** ID of a subscription. If specified, this endpoint will return all events for the given subscription.

   */
  subscription?: string;
}

interface ListEventsSuccessResponse extends CursorResponse {
  events: EventsResponse[];
}

interface GetEventsSuccessResponse extends CursorResponse {
  events: EventsResponse;
}

interface Events {
  list: (
    params: ListEventsRequest & Params<ListEventsRequest>,
  ) => ListEventsSuccessResponse;
  get: (resourceId: string) => GetEventsSuccessResponse;
}

export {
  GetEventsSuccessResponse,
  ListEventsRequest,
  ListEventsSuccessResponse,
  Events,
};
