import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CancelSubscriptionsRequest,
  CancelSubscriptionsSuccessResponse,
  CreateSubscriptionsRequest,
  CreateSubscriptionsSuccessResponse,
  GetSubscriptionsSuccessResponse,
  ListSubscriptionsRequest,
  ListSubscriptionsSuccessResponse,
  Subscriptions,
  UpdateSubscriptionsRequest,
  UpdateSubscriptionsSuccessResponse,
} from "../types/resources/Subscriptions";

class SubscriptionsResource extends GocardlessResource
  implements Subscriptions {
  public resourceName: string = "subscriptions";
  public create(
    params: CreateSubscriptionsRequest | Params<CreateSubscriptionsRequest>,
  ): CreateSubscriptionsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params: ListSubscriptionsRequest | Params<ListSubscriptionsRequest>,
  ): ListSubscriptionsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public update(
    resourceId: string,
    params: UpdateSubscriptionsRequest | Params<UpdateSubscriptionsRequest>,
  ): UpdateSubscriptionsSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public cancel(
    resourceId: string,
    params: CancelSubscriptionsRequest | Params<CancelSubscriptionsRequest>,
  ): CancelSubscriptionsSuccessResponse {
    return super.post(
      `/${this.resourceName}/${resourceId}/actions/cancel`,
      params,
    );
  }
  public get(resourceId: string): GetSubscriptionsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default SubscriptionsResource;
