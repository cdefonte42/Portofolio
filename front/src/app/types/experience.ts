export interface Experience {
    dateForm: string;
    dateTo: string;
    title: string;
    type: "job" | "school";
    location: string;
    description?: string;
}