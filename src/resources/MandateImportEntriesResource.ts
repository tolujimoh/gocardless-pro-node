import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CreateMandateImportEntriesRequest,
  CreateMandateImportEntriesSuccessResponse,
  ListMandateImportEntriesRequest,
  ListMandateImportEntriesSuccessResponse,
  MandateImportEntries,
} from "../types/resources/MandateImportEntries";

class MandateImportEntriesResource extends GocardlessResource
  implements MandateImportEntries {
  public resourceName: string = "mandate_import_entries";

  public create(
    params:
      | CreateMandateImportEntriesRequest
      | Params<CreateMandateImportEntriesRequest>,
  ): CreateMandateImportEntriesSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
  public list(
    params:
      | ListMandateImportEntriesRequest
      | Params<ListMandateImportEntriesRequest>,
  ): ListMandateImportEntriesSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
}

export default MandateImportEntriesResource;
