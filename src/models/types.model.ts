export type Direction = "asc" | "desc" | null;
export type FilterActiveEvents = "Active" | "Inactive" | "All";
export type ControlOptions<T> = { title: string; action: (item: T) => void }[];
