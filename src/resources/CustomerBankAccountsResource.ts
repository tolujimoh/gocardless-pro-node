import GocardlessResource from "../GocardlessResource";
import { CustomerBankAccounts } from "../types/resources";

class CustomerBankAccountsResource extends GocardlessResource
  implements CustomerBankAccounts {
  public resourceName: string = "customer_bank_accounts";
}

export default CustomerBankAccountsResource;
