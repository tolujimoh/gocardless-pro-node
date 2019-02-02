import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  ListPayoutItemsRequest,
  ListPayoutItemsSuccessResponse,
  PayoutItems,
} from "../types/resources/PayoutItems";

class PayoutItemsResource extends GocardlessResource implements PayoutItems {
  public resourceName: string = "payout_items";
  public list(
    params: ListPayoutItemsRequest | Params<ListPayoutItemsRequest>,
  ): ListPayoutItemsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
}

export default PayoutItemsResource;
