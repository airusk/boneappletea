import React from 'react';
import { withRouter } from 'react-router-dom';
import CloseSVG from '../icons/close_icon';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    let email = "pizzalover@bat.com".split("");
    let password = "pepperoni".split("");
    this.setState({email:"",password:""},()=>this.demoLogin(email,password));
  }

  demoLogin(email, password, time = 100){
    //hardcoded on 10 characters before '@ba.com'
    if (email.length != 0){
      switch(email.length){
        case (16): 
          time = 50;
          break;
        case (8):
          time = 250;
          break;
        case (7):
          time = 50;
          break;
        case(5):
          time = 250;
          break;
        case (3):
          time = 50;
          break;
        default:
          time = time;
      }
      const nextChar = email.shift();
      this.setState({
        email: this.state.email + nextChar
      },()=>setTimeout(
        ()=>this.demoLogin(email,password, time),time)
      );
    }else if(password.length != 0){
      const nextChar = password.shift();
      this.setState({
        password: this.state.password + nextChar
      }, () => setTimeout(
        () => this.demoLogin(email, password, time),time)
      );
    }else{
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }
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
        <img src={window.logo2URL} className="logo"/>
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
          <div className="messages errors">
            {this.renderErrors()}
          </div>
          <br/>
          <button className="submit" onClick={this.handleSubmit}>SIGN IN</button>
        </form>
        <br/>
          <p className="messages">Don't have a login? {this.props.otherForm} or sign in with a <a onClick={this.handleDemoLogin}>demo user</a> .</p>
      </div>
    ) :
    (
        <div className="form signup">
          <a onClick={this.props.closeModal}><CloseSVG /></a>
          <img src={window.logo2URL} className="logo" />
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
            <div className="messages errors">
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