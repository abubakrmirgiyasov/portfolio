interface ITechnology {
    name: string;
    level: string;
}

export interface IStack {
    frontend: ITechnology[];
    backend: ITechnology[];
}