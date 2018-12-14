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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to AirCamp!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
                placeholder="First Name..."
              />
            </label>
            <br />
            <label>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
                placeholder="Last name..."
              />
            </label>
            <br />
            <label>
              <input type="text"
                value={this.state.user_img_url}
                onChange={this.update('user_img_url')}
                className="login-input"
                placeholder="image url..."
              />
            </label>
            <br />
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email address..."
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password..."
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
