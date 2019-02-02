import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CancelPaymentsRequest,
  CancelPaymentsSuccessResponse,
  CreatePaymentsRequest,
  CreatePaymentsSuccessResponse,
  GetPaymentsSuccessResponse,
  ListPaymentsRequest,
  ListPaymentsSuccessResponse,
  Payments,
  RetryPaymentsRequest,
  RetryPaymentsSuccessResponse,
  UpdatePaymentsRequest,
  UpdatePaymentsSuccessResponse,
} from "../types/resources/Payments";

class PaymentsResource extends GocardlessResource implements Payments {
  public resourceName: string = "payments";
  public create(
    params: CreatePaymentsRequest | Params<CreatePaymentsRequest>,
  ): CreatePaymentsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params: ListPaymentsRequest | Params<ListPaymentsRequest>,
  ): ListPaymentsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public update(
    resourceId: string,
    params: UpdatePaymentsRequest | Params<UpdatePaymentsRequest>,
  ): UpdatePaymentsSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public cancel(
    resourceId: string,
    params: CancelPaymentsRequest | Params<CancelPaymentsRequest>,
  ): CancelPaymentsSuccessResponse {
    return super.post(
      `/${this.resourceName}/${resourceId}/actions/cancel`,
      params,
    );
  }
  public retry(
    resourceId: string,
    params: RetryPaymentsRequest | Params<RetryPaymentsRequest>,
  ): RetryPaymentsSuccessResponse {
    return super.post(
      `/${this.resourceName}/${resourceId}/actions/retry`,
      params,
    );
  }
  public get(resourceId: string): GetPaymentsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default PaymentsResource;
