import {Observable} from 'rxjs';
import {INewsEntry} from './models/newsEntry';
import {IWorksEntry} from './models/worksEntry';

const listCall = (entities: string) => Observable.ajax({ url:`/api/${entities}`}).map(r => r.response.data);

class Client {
    news: () => Observable<INewsEntry[]> = () => listCall('news');
    works: () => Observable<IWorksEntry[]> = () => listCall('works');
}

export const client: Client = new Client();
