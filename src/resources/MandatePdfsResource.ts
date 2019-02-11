import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  CreateMandatePdfsRequest,
  CreateMandatePdfsSuccessResponse,
  MandatePdfs,
} from "../types/resources/MandatePdfs";

class MandatePdfsResource extends GocardlessResource implements MandatePdfs {
  public resourceName: string = "mandate_pdfs";
  public create(
    params: CreateMandatePdfsRequest | Params<CreateMandatePdfsRequest>,
  ): CreateMandatePdfsSuccessResponse {
    return super.post(`/${this.resourceName}`, params);
  }
}

export default MandatePdfsResource;
