import GocardlessResource from "../GocardlessResource";
import { Payouts } from "../types/resources";

class PayoutsResource extends GocardlessResource implements Payouts {
  public resourceName: string = "payouts";
}

export default PayoutsResource;
