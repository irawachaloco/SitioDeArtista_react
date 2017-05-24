import {IWorksEntry} from './worksEntry';
import {INewsEntry} from './newsEntry';
import {IAuthorsEntry} from './authorsEntry';

/*
AppState represents the state of our application. It may be the case that we have some local states
for some components, but the main state as the sections, selected section, list of news, list of works, etc.
will be stores in an objects of this type.
 */
export interface IAppState {
    selectedSection: string,
    works: IWorksEntry[],
    news: INewsEntry[],
    authors: IAuthorsEntry[]
}

export const initialState: IAppState = {
    selectedSection: 'home',
    works: [],
    news: [],
    authors: []
};

type Action<T> = (t: T) => (s: IAppState) => IAppState;  

export const changeSection:Action<string> = (section) =>
    (s) => ({selectedSection: section, works: s.works, news: s.news, authors: s.authors});

export const updateNews:Action<INewsEntry[]> = (news) =>
    (s) => ({selectedSection: s.selectedSection, works: s.works, news: news, authors: s.authors});

export const updateWorks:Action<IWorksEntry[]> = (works) =>
    (s) => ({selectedSection: s.selectedSection, works: works, news: s.news, authors: s.authors});

export const updateAuthors:Action<IAuthorsEntry[]> = (authors) =>
    (s) => ({selectedSection: s.selectedSection, works: s.works, news: s.news, authors: authors});