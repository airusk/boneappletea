import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    return (
      <div className="session-form">
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
      </div>
    );
  }
}

export default SessionForm