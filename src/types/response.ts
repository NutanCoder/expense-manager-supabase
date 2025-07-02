export interface ServiceResponse<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  data: T;
}
