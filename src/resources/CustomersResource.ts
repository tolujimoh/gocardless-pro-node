import GocardlessResource from "../GocardlessResource";
import { Customers } from "../types/resources";

class CustomersResource extends GocardlessResource implements Customers {
  public resourceName: string = "customers";
}

export default CustomersResource;
