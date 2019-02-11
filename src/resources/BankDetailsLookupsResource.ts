import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  BankDetailsLookups,
  CreateBankDetailsLookupsRequest,
  CreateBankDetailsLookupsSuccessResponse,
} from "../types/resources/BankDetailsLookups";

class BankDetailsLookupsResource extends GocardlessResource
  implements BankDetailsLookups {
  public resourceName: string = "bank_details_lookups";
  public create(
    params:
      | CreateBankDetailsLookupsRequest
      | Params<CreateBankDetailsLookupsRequest>,
  ): CreateBankDetailsLookupsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
}

export default BankDetailsLookupsResource;
