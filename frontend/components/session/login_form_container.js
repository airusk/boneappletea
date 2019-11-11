import React from 'react';
import { connect } from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm: (
    <a onClick={() => {
      dispatch(clearErrors())
      dispatch(openModal('signup'))}}
    >
      Register now
    </a>
  ),
  closeModal: () => {
    dispatch(closeModal())
    dispatch(clearErrors())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);