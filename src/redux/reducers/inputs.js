import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  phn: '',
  salary: '',
  name:'',
  email:'',
  addr:'',
  deg:'',

}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_PHN: {
      const { phn } = action;
      return {
        ...state,
        phn,
      }
    }
     case actionTypes.SET_INPUT_DEG: {
      const { deg } = action;
      return {
        ...state,
        deg,
      }
    }
    case actionTypes.SET_INPUT_SALARY: {
      const { salary } = action;
      return {
        ...state,
        salary,
      }
    }
     case actionTypes.SET_INPUT_ADDR: {
      const { addr } = action;
      return {
        ...state,
        addr,
      }
    }
      case actionTypes.SET_INPUT_NAME: {
      const { name } = action;
      return {
        ...state,
        name,
      }
    }
      case actionTypes.SET_INPUT_EMAIL: {
      const { email } = action;
      return {
        ...state,
        email,
      }
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}