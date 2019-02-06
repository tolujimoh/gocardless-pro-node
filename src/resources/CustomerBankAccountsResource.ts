import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CreateCustomerBankAccountsRequest,
  CreateCustomerBankAccountsSuccessResponse,
  CustomerBankAccounts,
  DisableCustomerBankAccountsSuccessResponse,
  GetCustomerBankAccountsSuccessResponse,
  ListCustomerBankAccountsRequest,
  ListCustomerBankAccountsSuccessResponse,
  UpdateCustomerBankAccountsRequest,
  UpdateCustomerBankAccountsSuccessResponse,
} from "../types/resources/CustomerBankAccounts";

class CustomerBankAccountsResource extends GocardlessResource
  implements CustomerBankAccounts {
  public resourceName: string = "customer_bank_accounts";

  public create(
    params:
      | CreateCustomerBankAccountsRequest
      | Params<CreateCustomerBankAccountsRequest>,
  ): CreateCustomerBankAccountsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }

  public list(
    params:
      | ListCustomerBankAccountsRequest
      | Params<ListCustomerBankAccountsRequest>,
  ): ListCustomerBankAccountsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public disable(
    resourceId: string,
  ): DisableCustomerBankAccountsSuccessResponse {
    return super.post(`/${this.resourceName}/${resourceId}/actions/disable`);
  }

  public update(
    resourceId: string,
    params:
      | UpdateCustomerBankAccountsRequest
      | Params<UpdateCustomerBankAccountsRequest>,
  ): UpdateCustomerBankAccountsSuccessResponse {
    return super.put(`/${this.resourceName}/${resourceId}`, params);
  }
  public get(resourceId: string): GetCustomerBankAccountsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default CustomerBankAccountsResource;
