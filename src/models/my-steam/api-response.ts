
export interface ApiResponse<T> {
  page: number;
  itemsPerPage: number;
  total: number;
  totalePages: number
  items: Array<T>;
}
