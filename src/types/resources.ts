interface CursorOptions {
  /** Cursor pointing to the start of the desired set.
   */
  after?: string;
  /** Cursor pointing to the end of the desired set.
   */
  before?: string;
  created_at?: {
    /** Limit to records created after the specified date-time.
     */
    gt?: string;
    /** Limit to records created on or after the specified date-time.
     */
    gte?: string;
    /** Limit to records created before the specified date-time.
     */
    lt?: string;
    /** Limit to records created on or before the specified date-time.
     */
    lte?: string;
  };
  /** Number of records to return.
   */
  limit?: number;
}

interface CursorResponse {
  meta: {
    cursors: {
      /** The ID of the first resource that has been returned
       */
      before: string;
      /** The ID of the last resource that has been returned.
       */
      after: string;
    };
    /** The ID of the last resource that has been returned.
     */
    limit: number;
  };
}

interface Params<T> {
  params: T;
}

interface CreditorBankAccount {}
interface CustomerBankAccounts {}
interface CustomerNotifications {}
interface Customers {}
interface Events {}
interface MandateImportEntries {}
interface MandateImports {}
interface Mandates {}
interface Payments {}
interface PayoutItems {}
interface Payouts {}
interface Refunds {}
interface Subscriptions {}

export {
  CursorOptions,
  CursorResponse,
  Params,
  CreditorBankAccount,
  CustomerBankAccounts,
  CustomerNotifications,
  Customers,
  Events,
  MandateImportEntries,
  MandateImports,
  Mandates,
  Payments,
  PayoutItems,
  Payouts,
  Refunds,
  Subscriptions,
};
