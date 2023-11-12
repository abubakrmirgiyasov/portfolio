export interface IProject {
    name: string;
    images: string[];
    frameworks: string[];
    description?: string | null;
    category: number;
    github?: string | null;
}