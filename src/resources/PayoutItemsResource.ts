import GocardlessResource from "../GocardlessResource";
import { PayoutItems } from "../types/resources";

class PayoutItemsResource extends GocardlessResource implements PayoutItems {
  public resourceName: string = "payout_items";
}

export default PayoutItemsResource;
