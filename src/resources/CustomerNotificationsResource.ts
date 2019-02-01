import GocardlessResource from "../GocardlessResource";
import { CustomerNotifications } from "../types/resources";

class CustomerNotificationsResource extends GocardlessResource
  implements CustomerNotifications {
  public resourceName: string = "customer_notifications";
}

export default CustomerNotificationsResource;
