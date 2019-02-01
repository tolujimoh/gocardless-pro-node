import GocardlessResource from "../GocardlessResource";
import { CreditorBankAccount } from "../types/resources";

class CreditorBankAccountResource extends GocardlessResource
  implements CreditorBankAccount {
  public resourceName: string = "creditor_bank_account";
}

export default CreditorBankAccountResource;
