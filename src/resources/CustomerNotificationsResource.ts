import GocardlessResource from "../GocardlessResource";
import {
  CustomerNotifications,
  HandleCustomerNotificationsSuccessResponse,
} from "../types/resources/CustomerNotifications";

class CustomerNotificationsResource extends GocardlessResource
  implements CustomerNotifications {
  public resourceName: string = "customer_notifications";

  public handle(
    resourceId: string,
  ): HandleCustomerNotificationsSuccessResponse {
    return super.post(`/${this.resourceName}/${resourceId}/actions/handle`);
  }
}

export default CustomerNotificationsResource;
