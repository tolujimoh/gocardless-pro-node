import GocardlessResource from "../GocardlessResource";
import { Subscriptions } from "../types/resources";

class SubscriptionsResource extends GocardlessResource
  implements Subscriptions {
  public resourceName: string = "subscriptions";
}

export default SubscriptionsResource;
