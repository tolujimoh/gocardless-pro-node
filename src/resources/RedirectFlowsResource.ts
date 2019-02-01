import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CompleteRedirectFlowsRequest,
  CompleteRedirectFlowsSuccessResponse,
  CreateRedirectFlowsRequest,
  CreateRedirectFlowsSuccessResponse,
  GetRedirectFlowsSuccessResponse,
  RedirectFlows,
} from "../types/resources/RedirectFlows";

class RedirectFlowsResource extends GocardlessResource
  implements RedirectFlows {
  public resourceName: string = "redirect_flows";

  public create(
    params: CreateRedirectFlowsRequest | Params<CreateRedirectFlowsRequest>,
  ): CreateRedirectFlowsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }

  public get(resourceId: string): GetRedirectFlowsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }

  public complete(
    resourceId: string,
    params: CompleteRedirectFlowsRequest | Params<CompleteRedirectFlowsRequest>,
  ): CompleteRedirectFlowsSuccessResponse {
    return super.get(
      `/${this.resourceName}/${resourceId}/actions/complete`,
      params,
    );
  }
}

export default RedirectFlowsResource;
