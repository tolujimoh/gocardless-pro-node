import GocardlessResource from "../GocardlessResource";
import { Mandates } from "../types/resources";

class MandatesResource extends GocardlessResource implements Mandates {
  public resourceName: string = "mandates";
}

export default MandatesResource;
