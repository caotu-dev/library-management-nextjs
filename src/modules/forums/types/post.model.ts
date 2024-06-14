export interface TPost {
    id: number;
    body: string;
    reactions: {
        likes: number;
        dislikes: number;
    };
    tags: string[];
    title: string;
    userId: number;
    views: number
}

export interface TComment {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: {
        id: number,
        username: string,
        fullName: string
    }
}