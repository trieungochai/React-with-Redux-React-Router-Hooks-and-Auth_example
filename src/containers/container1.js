import React from 'react';

import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class Container1 extends React.Component {
  render() {

    const user_text = 'text 1';

    return (
      <div>
        <button onClick={() => console.log(this.props.stateProp1, this.props.user_text)}> Get State </button>
        <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
        <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
        <button onClick={() => this.props.action_creator1()}> Dispatch Action Creator 1 </button>
        <button onClick={() => this.props.action_creator2()}> Dispatch Action Creator 2 </button>
        <button onClick={() => this.props.action_creator3(user_text)}> Dispatch Action Creator 3 </button>
        {this.props.stateProp1
          ? <h1>{this.props.user_text}</h1>
          : null
        }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    stateProp1: state.stateProp1,
    user_text: state.user_text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.userInput(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container1);