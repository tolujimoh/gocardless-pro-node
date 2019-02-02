import { CursorOptions, CursorResponse, Params } from "../resources";

interface CreateMandateImportsRequest {
  /**
   *   A Direct Debit scheme. Currently “autogiro”, “bacs”, “becs”, “becs_nz”, “betalingsservice”, “pad” and “sepa_core” are supported.   */
  scheme: string;
}

interface MandateImportsResponse {
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

interface CreateMandateImportsSuccessResponse {
  mandate_imports: MandateImportsResponse;
}

interface GetMandateImportsSuccessResponse {
  mandate_imports: MandateImportsResponse;
}

interface CancelMandateImportsSuccessResponse {
  mandate_imports: MandateImportsResponse;
}

interface SubmitMandateImportsSuccessResponse {
  mandate_imports: MandateImportsResponse;
}

interface MandateImports {
  create: (
    params: CreateMandateImportsRequest & Params<CreateMandateImportsRequest>,
  ) => CreateMandateImportsSuccessResponse;
  get: (resourceId: string) => GetMandateImportsSuccessResponse;
  cancel: (resourceId: string) => CancelMandateImportsSuccessResponse;
  submit: (resourceId: string) => SubmitMandateImportsSuccessResponse;
}

export {
  CreateMandateImportsRequest,
  CreateMandateImportsSuccessResponse,
  GetMandateImportsSuccessResponse,
  SubmitMandateImportsSuccessResponse,
  CancelMandateImportsSuccessResponse,
  MandateImports,
};
