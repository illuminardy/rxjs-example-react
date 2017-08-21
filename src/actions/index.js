import { SEARCH_GITHUB_USERS, RECEIVED_GITHUB_USERS, NO_USER_FOUND_ERROR } from '../actionTypes';

export const searchGithubUsers = (query) => {
  return {
    type: SEARCH_GITHUB_USERS,
    payload: {
      query
    }
  };
}

export const receivedGithubUser = (user) => {
  console.log('within received github user action');
  console.log(user);
  return {
    type: RECEIVED_GITHUB_USERS,
    payload: {
      user
    }
  };
};

export const noUserFound = (err) => {
  console.log('within no use found action');
  return {
    type: NO_USER_FOUND_ERROR,
    payload: {
      error: err
    }
  };
}