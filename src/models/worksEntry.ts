export interface ISubWork {
    title: string;
    technique: string;
    year: string;
    itemImage: string;
}

export interface IWorksEntry {
    jsonUrl: string;
    title: string;
    url: string;
    authorName: string;
    subWorks: ISubWork[];
}
