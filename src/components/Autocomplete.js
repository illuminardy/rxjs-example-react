import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {searchGithubUsers} from '../actions';
const mapStateToProps = state => {
    return {
        user: state.github.user,
        error: state.github.error
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        search: (val) => {
            dispatch(searchGithubUsers(val));
        }
    };
  };

class Autocomplete extends Component {
  render() {
    let userInfo;
    if(this.props.user){
      userInfo = JSON.stringify(this.props.user);
    }
    else if(this.props.error){
      userInfo = <span>User Not Found</span>
    }
    return (
      <div>
        <label>Github user ( Enter username ) </label>
        <input id="username" type="text" onChange={(evt) => this.props.search(evt.target.value)} />
        {userInfo}
      </div>
    );
  }
}

Autocomplete.propTypes = {
    github: PropTypes.object,
    search: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
