import actionTypes from '../actionTypes';

export default {
  setInputPhn: phn => ({
    type: actionTypes.SET_INPUT_PHN,
    phn,
  }),
  setInputName: name => ({
    type: actionTypes.SET_INPUT_NAME,
    name,
  }),
   setInputDeg: deg => ({
    type: actionTypes.SET_INPUT_DEG,
    deg,
  }),
    setInputSalary: salary => ({
    type: actionTypes.SET_INPUT_SALARY,
    salary,
  }),
   setInputAddr: addr => ({
    type: actionTypes.SET_INPUT_ADDR,
    addr,
  }),
    setInputEmail: email => ({
    type: actionTypes.SET_INPUT_EMAIL,
    email,
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}