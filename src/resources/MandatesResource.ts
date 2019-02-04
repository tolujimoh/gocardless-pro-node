import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CancelMandatesRequest,
  CancelMandatesSuccessResponse,
  CreateMandatesRequest,
  CreateMandatesSuccessResponse,
  GetMandatesSuccessResponse,
  ListMandatesRequest,
  ListMandatesSuccessResponse,
  Mandates,
  ReinstateMandatesRequest,
  ReinstateMandatesSuccessResponse,
  UpdateMandatesRequest,
  UpdateMandatesSuccessResponse,
} from "../types/resources/Mandates";

class MandatesResource extends GocardlessResource implements Mandates {
  public resourceName: string = "mandates";
  public create(
    params: CreateMandatesRequest | Params<CreateMandatesRequest>,
  ): CreateMandatesSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params: ListMandatesRequest | Params<ListMandatesRequest>,
  ): ListMandatesSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public cancel(
    resourceId: string,
    params: CancelMandatesRequest | Params<CancelMandatesRequest>,
  ): CancelMandatesSuccessResponse {
    return super.post(
      `/${this.resourceName}/${resourceId}/actions/cancel`,
      params,
    );
  }
  public reinstate(
    resourceId: string,
    params: ReinstateMandatesRequest | Params<ReinstateMandatesRequest>,
  ): ReinstateMandatesSuccessResponse {
    return super.post(
      `/${this.resourceName}/${resourceId}/actions/reinstate`,
      params,
    );
  }
  public update(
    resourceId: string,
    params: UpdateMandatesRequest | Params<UpdateMandatesRequest>,
  ): UpdateMandatesSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public get(resourceId: string): GetMandatesSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default MandatesResource;
