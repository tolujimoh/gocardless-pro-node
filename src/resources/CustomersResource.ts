import GocardlessResource from "../GocardlessResource";
import { CursorOptions, Params } from "../types/resources";
import {
  CreateCustomersRequest,
  CreateCustomersSuccessResponse,
  Customers,
  GetCustomersSuccessResponse,
  ListCustomersSuccessResponse,
  UpdateCustomersRequest,
  UpdateCustomersSuccessResponse,
} from "../types/resources/Customers";

class CustomersResource extends GocardlessResource implements Customers {
  public resourceName: string = "customers";

  public create(
    params: CreateCustomersRequest | Params<CreateCustomersRequest>,
  ): CreateCustomersSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params: CursorOptions | Params<CursorOptions>,
  ): ListCustomersSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public update(
    resourceId: string,
    params: UpdateCustomersRequest | Params<UpdateCustomersRequest>,
  ): UpdateCustomersSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public get(resourceId: string): GetCustomersSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default CustomersResource;
