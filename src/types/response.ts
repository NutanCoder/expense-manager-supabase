export interface ServiceResponse<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  data: T;
  isLastPage?: boolean;
}

export interface ServicePaginatedResponse<T> extends ServiceResponse<T> {
  isLastPage: boolean;
}
