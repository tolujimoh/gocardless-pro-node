import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CreateCreditorBankAccountsRequest,
  CreateCreditorBankAccountsSuccessResponse,
  CreditorBankAccounts,
  DisableCreditorBankAccountsSuccessResponse,
  GetCreditorBankAccountsSuccessResponse,
  ListCreditorBankAccountsRequest,
  ListCreditorBankAccountsSuccessResponse,
} from "../types/resources/CreditorBankAccounts";

class CreditorBankAccountsResource extends GocardlessResource
  implements CreditorBankAccounts {
  public resourceName: string = "creditor_bank_accounts";

  public create(
    params:
      | CreateCreditorBankAccountsRequest
      | Params<CreateCreditorBankAccountsRequest>,
  ): CreateCreditorBankAccountsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }

  public list(
    params:
      | ListCreditorBankAccountsRequest
      | Params<ListCreditorBankAccountsRequest>,
  ): ListCreditorBankAccountsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public disable(
    resourceId: string,
  ): DisableCreditorBankAccountsSuccessResponse {
    return super.post(`/${this.resourceName}/${resourceId}/actions/disable`);
  }
  public get(resourceId: string): GetCreditorBankAccountsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default CreditorBankAccountsResource;
