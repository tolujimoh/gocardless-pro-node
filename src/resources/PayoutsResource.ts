import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  GetPayoutsSuccessResponse,
  ListPayoutsRequest,
  ListPayoutsSuccessResponse,
  Payouts,
} from "../types/resources/Payouts";

class PayoutsResource extends GocardlessResource implements Payouts {
  public resourceName: string = "payouts";

  public list(
    params: ListPayoutsRequest | Params<ListPayoutsRequest>,
  ): ListPayoutsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public get(resourceId: string): GetPayoutsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default PayoutsResource;
