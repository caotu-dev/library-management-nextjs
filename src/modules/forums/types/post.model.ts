interface TPost {
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