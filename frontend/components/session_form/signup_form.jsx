import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '', 
      zipcode: ''
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
      <ul className="errors-signup">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sign-up">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className='signup-welcome'>Join AirCamp</div> 
          <div className='signup-tagline'>Discover the best camping near me</div>
          {this.renderErrors()}
          <span></span>
            <label>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                placeholder="First Name..."
              />
            </label>
            <label>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                placeholder="Last name..."
              />
            </label>
            <label className="signup-input">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                
                placeholder="Email address..."
              />
            </label>
          <label className="signup-input">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                
                placeholder="Password..."
              />
            </label>
            <input className="session-signup" type="submit" value="Join AirCamp" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
