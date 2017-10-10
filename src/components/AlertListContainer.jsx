import { connect } from 'react-redux';
import React from 'react';

import {
  removeAlert,
  newAlert
} from 'Actions/AlertActions';

import AlertList from 'Components/AlertList';

const mapStateToProps = ({ alerts }) => {
  return { alerts };
};

const mapDispatchToProps = (dispatch) => ({
  removeAlert: (index) => dispatch(removeAlert(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertList);
