import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './constants';

const initialState = {
  isShow: false,
  options: {}
};

const ModalReducer = (state = initialState, action) => {
  const { type, options } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShow: true,
        options
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isShow: false
      }
    default:
      return state;
  }
};

export default ModalReducer;