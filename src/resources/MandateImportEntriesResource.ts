import GocardlessResource from "../GocardlessResource";
import { MandateImportEntries } from "../types/resources";

class MandateImportEntriesResource extends GocardlessResource
  implements MandateImportEntries {
  public resourceName: string = "mandate_import_entries";
}

export default MandateImportEntriesResource;
