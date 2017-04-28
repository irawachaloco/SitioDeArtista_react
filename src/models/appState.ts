import {IWorksEntry} from './worksEntry';
import {INewsEntry} from './newsEntry';

/*
AppState represents the state of our application. It may be the case that we have some local states
for some components, but the main state as the sections, selected section, list of news, list of works, etc.
will be stores in an objects of this type.
 */
export interface IAppState {
    selectedSection: string,
    works: IWorksEntry[],
    news: INewsEntry[]
}

export const initialState: IAppState = {
    selectedSection: 'home',
    works: [],
    news: []
};

type Action<T> = (t: T) => (s: IAppState) => IAppState;  

export const changeSection:Action<string> = (section) =>
    (s) => ({selectedSection: section, works: s.works, news: s.news});

export const updateNews:Action<INewsEntry[]> = (news) =>
    (s) => ({selectedSection: s.selectedSection, works: s.works, news: news});

export const updateWorks:Action<IWorksEntry[]> = (works) =>
    (s) => ({selectedSection: s.selectedSection, works: works, news: s.news});