import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Signup'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser)),
  otherForm: (
    <a onClick={() => {
      dispatch(clearErrors())
      dispatch(openModal('login'))}
    }>
      Login now.
    </a>
  ),
  closeModal: () => {
    dispatch(closeModal())
    dispatch(clearErrors())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);