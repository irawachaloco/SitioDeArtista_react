import {Observable} from 'rxjs';
import {INewsEntry} from './models/newsEntry';
import {IWorksEntry} from './models/worksEntry';
import { IAuthorsEntry } from "./models/authorsEntry";

const listCall = (entities: string) => Observable.ajax({ url:`/api/${entities}`}).map(r => r.response.data);

class Client {
    news: () => Observable<INewsEntry[]> = () => listCall('news');
    works: () => Observable<IWorksEntry[]> = () => listCall('works');
    authors: () => Observable<IAuthorsEntry[]> = () => listCall('authors');
}

export const client: Client = new Client();
