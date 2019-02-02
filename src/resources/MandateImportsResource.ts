import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CancelMandateImportsSuccessResponse,
  CreateMandateImportsRequest,
  CreateMandateImportsSuccessResponse,
  GetMandateImportsSuccessResponse,
  MandateImports,
  SubmitMandateImportsSuccessResponse,
} from "../types/resources/MandateImports";

class MandateImportsResource extends GocardlessResource
  implements MandateImports {
  public resourceName: string = "mandate_imports";

  public create(
    params: CreateMandateImportsRequest | Params<CreateMandateImportsRequest>,
  ): CreateMandateImportsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }

  public get(resourceId: string): GetMandateImportsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }

  public cancel(resourceId: string): CancelMandateImportsSuccessResponse {
    return super.post(`/${this.resourceName}/${resourceId}/actions/cancel`);
  }

  public submit(resourceId: string): SubmitMandateImportsSuccessResponse {
    return super.post(`/${this.resourceName}/${resourceId}/actions/submit`);
  }
}

export default MandateImportsResource;
