export interface HNItem {
    objectID: string;
    author: string;
    title: string;
    points: number;
    created_at: Date;
    story_text?: string;
    url?: string;
    num_comments: number;
}
