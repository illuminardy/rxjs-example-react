import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { receivedGithubUser, noUserFound } from '../actions';

import { SEARCH_GITHUB_USERS } from '../actionTypes';

const searchUsers = (action$) => {
    return action$.ofType(SEARCH_GITHUB_USERS)
        .debounceTime(500)
        .map(action => action.payload.query)
        .filter(value => !value || value.length > 2)
        .distinctUntilChanged()
        .mergeMap(q => {
            return ajax.getJSON(`https://api.github.com/users/${q}`)
                        .map(res => receivedGithubUser(res))
                        .catch(error => Observable.of(noUserFound(error)));
        });
        
        
};

export default searchUsers;