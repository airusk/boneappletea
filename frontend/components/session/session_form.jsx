import React from 'react';
import { withRouter } from 'react-router-dom';
import CloseSVG from '../icons/close_icon';

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
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>{this.props.errors.map((error, i) => (
        <li key={i}>- {error}</li>
      ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const properForm = (formType === 'Login') ? 
    (
      <div className="form login">
        <a onClick={this.props.closeModal}><CloseSVG/></a>
        <img src="/assets/src/logo2.png" className="logo"/>
        <p className="messages">Please sign in to your account.</p>
        <br/>
        <form className="fields">
          <label id="email">
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="E-MAIL ADDRESS"/>
          </label>
          <br/>
          <label id="password">
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="PASSWORD"/>
          </label>
          <br/>
          <div className="messages">
            {this.renderErrors()}
          </div>
          <br/>
          <button className="submit" onClick={this.handleSubmit}>SIGN IN</button>

        </form>
        <br/>
        <p className="messages">Don't have a login? {this.props.otherForm}</p>
      </div>
    ) :
    (
        <div className="form signup">
          <a onClick={this.props.closeModal}><CloseSVG /></a>
          <img src="/assets/src/logo2.png" className="logo" />
          <p className="messages">Please complete the form to register. Password must be atleast 6 characters.</p>
          <br/>
          <form className="fields">
            <label id="name">
            <input type="text" value={this.state.name} onChange={this.handleInput('name')} placeholder="NAME" />
            </label>
            <br/>
            <label id="email">
              <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="EMAIL" />
            </label>
            <br/>
            <label id="password">
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="PASSWORD" />
            </label>
            <br/>
            <div className="messages">
              {this.renderErrors()}
            </div>
            <br />
            <button className="submit" onClick={this.handleSubmit}>REGISTER</button>
            <br/>
          </form>
          <p className="messages">Already a registered? {this.props.otherForm}</p>
        </div>
    )
    return properForm;
  }
}

export default withRouter(SessionForm);