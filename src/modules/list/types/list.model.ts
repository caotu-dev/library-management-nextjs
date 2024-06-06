export interface CreateListRequest {
    name: string;
    description: string;
    tags?: string[];
    seeds?: string[];
}