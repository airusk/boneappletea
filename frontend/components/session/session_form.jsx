import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>{this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const properForm = (formType === 'Login') ? 
    (
      <div className="session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        {this.renderErrors()}
        <h2>{formType} Here!</h2>
        <form>
          <label> Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <br />
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>{formType}</button>
        </form>
        Are you new here? {this.props.otherForm} here
      </div>
    ) :
    (
        <div className="session-form">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <h2>{formType} Here!</h2>
          <form>
            <label> Name:
            <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
            </label>
            <label> Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <br />
            <label> Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <button onClick={this.handleSubmit}>{formType}</button>
          </form>
          Already a member? {this.props.otherForm} instead
        </div>
    )
    return properForm;
  }
}

export default withRouter(SessionForm);