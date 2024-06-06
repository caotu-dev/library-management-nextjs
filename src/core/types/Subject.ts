export interface SubjectRequest {
    details?: boolean,
    ebooks?: boolean,
    published_in?: string,
    limit: number,
    offset: number
}

export interface SubjectAuthor {
    key: string;
    name: string
}

export interface SubjectResponse {
    title: string;
    authors: SubjectAuthor[];
    cover_id: number;
    first_publish_year: number;
    availability: {
        available_to_borrow: boolean;
        available_to_browse: boolean;
        status: string;
    }
}
