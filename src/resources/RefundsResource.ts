import GocardlessResource from "../GocardlessResource";
import { Refunds } from "../types/resources";

class RefundsResource extends GocardlessResource implements Refunds {
  public resourceName: string = "refunds";
}

export default RefundsResource;
