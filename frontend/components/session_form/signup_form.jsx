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
      <ul>
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
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className='signup-welcome'>Join Hipcamp</div> 
          <div className='signup-tagline'>Discover the best camping near me</div>
          {this.renderErrors()}
          <span></span>
            <label>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
                placeholder="First Name..."
              />
            </label>
            <label>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
                placeholder="Last name..."
              />
            </label>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email address..."
              />
            </label>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password..."
              />
            </label>
            <input className="session-submit" type="submit" value="Join AirCamp" />
        </form>
    );
  }
}

export default SignupForm;
