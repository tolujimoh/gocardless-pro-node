interface CustomerNotificationsResponse {
  /**
   * The id of the notification.
   */
  id: string;

  /**
   * The action that was taken on the notification. Currently this can only be handled, which means the integrator sent the notification themselves.
   */
  action_taken: string;

  /**
   * Fixed timestamp, recording when this action was taken.

   */
  action_taken_at: string;

  /**
   * A string identifying the integrator who was able to handle this notification.

   */
  action_taken_by: string;

  /**
   * The type of notification the customer shall receive.
   */
  type: string;

  links: {
    /**
     * The customer who should be contacted with this notification.
     */
    customer: string;

    /**
     * The event that triggered the notification to be scheduled.
     */
    event: string;

    /**
     * The identifier of the related mandate.
     */
    mandate: string;

    /**
     * The identifier of the related payment.
     */
    payment: string;

    /**
     * The identifier of the related refund.
     */
    refund: string;

    /**
     * The identifier of the related subscription.
     */
    subscription: string;
  };
}

interface HandleCustomerNotificationsSuccessResponse {
  customer_notifications: CustomerNotificationsResponse;
}

interface CustomerNotifications {
  handle: (resourceId: string) => HandleCustomerNotificationsSuccessResponse;
}

export { HandleCustomerNotificationsSuccessResponse, CustomerNotifications };
