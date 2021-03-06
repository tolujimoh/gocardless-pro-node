import GocardlessResource from "../GocardlessResource";
import { CursorOptions, Params } from "../types/resources";

import {
  CreateCreditorRequest,
  CreateCreditorSuccessResponse,
  Creditors,
  GetCreditorSuccessResponse,
  ListCreditorSuccessResponse,
  UpdateCreditorRequest,
  UpdateCreditorSuccessResponse,
} from "../types/resources/Creditors";

class CreditorsResource extends GocardlessResource implements Creditors {
  public resourceName: string = "creditors";

  public create(
    params: CreateCreditorRequest | Params<CreateCreditorRequest>,
  ): CreateCreditorSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }

  public list(
    params: CursorOptions | Params<CursorOptions>,
  ): ListCreditorSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }

  public get(resourceId: string): GetCreditorSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }

  public update(
    resourceId: string,
    params: UpdateCreditorRequest | Params<UpdateCreditorRequest>,
  ): UpdateCreditorSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
}

export default CreditorsResource;
