import React from 'react';

import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class Container1 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.stateProp1)}> Get State </button>
        <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
        <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
        <button onClick={() => this.props.action_creator1()}> Dispatch Action Creator 1 </button>
        <button onClick={() => this.props.action_creator2()}> Dispatch Action Creator 2 </button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    stateProp1: state.stateProp1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container1);