import GocardlessResource from "../GocardlessResource";
import { Payments } from "../types/resources";

class PaymentsResource extends GocardlessResource implements Payments {
  public resourceName: string = "payments";
}

export default PaymentsResource;
