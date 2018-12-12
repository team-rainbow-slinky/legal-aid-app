import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';
import genStyles from '../app/App.css';
import styles from './Auth.css';

export class AuthForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    sessions: PropTypes.object,
    error: PropTypes.object
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
    console.log(this.state);
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  };

  render() {
    if(this.props.session) return <Redirect to={ROUTES.ORGHOME.linkTo()} />;

    const { email, password } = this.state;
    const { error } = this.props;

    return (
      <>
        {error && <p className={styles.error}>{error.error}</p>}
        <form onSubmit={this.handleSubmit} className={genStyles.form}>
          <p>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </p>
          <p>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </p>
          
          <button>Sign In</button>
        </form>
      </>
    );
  }
}
