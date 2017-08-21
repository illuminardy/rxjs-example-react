import { combineEpics } from 'redux-observable';
import searchUsers from './githubSearch';

export default combineEpics(
    searchUsers
)