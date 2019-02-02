import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CreateRefundsRequest,
  CreateRefundsSuccessResponse,
  GetRefundsSuccessResponse,
  ListRefundsRequest,
  ListRefundsSuccessResponse,
  Refunds,
  UpdateRefundsRequest,
  UpdateRefundsSuccessResponse,
} from "../types/resources/Refunds";

class RefundsResource extends GocardlessResource implements Refunds {
  public resourceName: string = "refunds";

  public create(
    params: CreateRefundsRequest | Params<CreateRefundsRequest>,
  ): CreateRefundsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params: ListRefundsRequest | Params<ListRefundsRequest>,
  ): ListRefundsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public update(
    resourceId: string,
    params: UpdateRefundsRequest | Params<UpdateRefundsRequest>,
  ): UpdateRefundsSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public get(resourceId: string): GetRefundsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default RefundsResource;
