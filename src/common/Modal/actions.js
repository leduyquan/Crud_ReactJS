import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './constants';

const showModal = options => ({
  type: SHOW_MODAL,
  options
});

const closeModal = () => ({
  type: CLOSE_MODAL
});

export const modalActions = {
  showModal,
  closeModal
};