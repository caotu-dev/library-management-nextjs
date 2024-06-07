export interface SearchBookRequest {
  q: string;
  fields?: string;
  sort?: "new" | "old" | "random";
  page?: number;
  limit?: number;
  offset?: number;
}
