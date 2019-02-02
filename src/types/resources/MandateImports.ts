import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateManadateImportsRequest {
  /**
   *   A Direct Debit scheme. Currently “autogiro”, “bacs”, “becs”, “becs_nz”, “betalingsservice”, “pad” and “sepa_core” are supported.   */
  scheme: string;
}

interface ManadateImportsResponse {
  /**
   * Unique identifier, beginning with “IM”.
   */
  id: string;

  /**
   *   Fixed timestamp, recording when this resource was created.
   */
  created_at: string;

  /**
   *   The scheme of the mandates to be imported.
All mandates in a single mandate import must be for the same scheme.
   */
  scheme: string;

  /**
   *   The status of the mandate import.
New mandate imports report the created status.

When the integrator has finished adding mandates and submitted the import, the status will report as submitted.

If the integrator decided to cancel the mandate import, the status will report cancelled.

Once a mandate import has been approved by a GoCardless team member, the status will initially report as processing (whilst the mandates are being imported).

When the mandates have all been imported successfully, the status will report as processed.
   */
  status: string;
}

interface CreateManadateImportsSuccessResponse {
  manadate_imports: ManadateImportsResponse;
}

interface GetManadateImportsSuccessResponse {
  manadate_imports: ManadateImportsResponse;
}

interface CancelManadateImportsSuccessResponse {
  manadate_imports: ManadateImportsResponse;
}

interface SubmitManadateImportsSuccessResponse {
  manadate_imports: ManadateImportsResponse;
}

interface ManadateImports {
  create: (
    params: CreateManadateImportsRequest & Params<CreateManadateImportsRequest>,
  ) => CreateManadateImportsSuccessResponse;
  get: (resourceId: string) => GetManadateImportsSuccessResponse;
  cancel: (resourceId: string) => CancelManadateImportsSuccessResponse;
  submit: (resourceId: string) => SubmitManadateImportsSuccessResponse;
}

export {
  CreateManadateImportsRequest,
  CreateManadateImportsSuccessResponse,
  GetManadateImportsSuccessResponse,
  SubmitManadateImportsSuccessResponse,
  CancelManadateImportsSuccessResponse,
  ManadateImports,
};
