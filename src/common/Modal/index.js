import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { modalActions } from './actions';

class ModalReact extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <button
          onClick={() => this.setState({ show: true })}
        >
          Launch contained modal
        </button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleHide}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShow: state.modalReducer.isShow,
  options: state.modalReducer.options
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(modalActions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalReact);