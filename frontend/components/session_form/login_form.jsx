import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul >
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let demo = {email: "demo@account.com", password: "demopassword"}
    return (
      
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className='login-welcome'>Welcome back!</div> 
          <div className='login-tagline'>It's about time for another camping trip</div> 
          {this.renderErrors()}
          <span></span>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input email" 
                placeholder="Email address"
              />
            </label>
            <span></span>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input password" 
                placeholder="Password"
              />
            </label>
            <span></span>
            
            <input className="session-submit" type="submit" value="Log In" />
            <span></span>
            <input className="session-submit" onClick={() => 
              this.props.processForm(demo).then(this.props.closeModal())} 
              type="submit" value="Demo Login" />
            <span className="session-login">Don't have an AirCamp account?&nbsp;
              {this.props.otherForm}</span>
            
        </form>
     
    );
  }
}

export default LoginForm;
