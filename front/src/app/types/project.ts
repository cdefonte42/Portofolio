export interface Project {
    dateForm: string;
    dateTo: string;
    title: string;
    type: "work" | "school";
    location?: string;
    description: string;
    skills?: string[];
    imagesPath: string[];
    videoPath?: string;
    links?: { link: string, type: "app" | "repo" }[];
}