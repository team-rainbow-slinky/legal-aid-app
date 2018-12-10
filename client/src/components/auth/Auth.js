import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';

export class AuthForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    sessions: PropTypes.objectOf
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  };

  render() {
    if(this.props.session) return <Redirect to={ROUTES.ORGHOME.linkTo()} />;

    const { email, password } = this.state;

    return (
      <>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={email} onChange={this.handleChange} />
          <input type="password" name={password} onChange={this.handleChange} />
          <button>Sign In</button>
        </form>
      </>
    );
  }
}
