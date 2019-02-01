import GocardlessResource from "../GocardlessResource";
import { MandateImports } from "../types/resources";

class MandateImportsResource extends GocardlessResource
  implements MandateImports {
  public resourceName: string = "mandate_imports";
}

export default MandateImportsResource;
