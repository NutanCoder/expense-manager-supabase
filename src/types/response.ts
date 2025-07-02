export interface ServiceResponse<T, E> {
  error: E;
  data: T;
}
