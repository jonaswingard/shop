import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const StartPage = ({ startLogin }) => (
  <div>
    <h2>Start Page</h2>
    <button onClick={startLogin}>Logga in</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(StartPage);
