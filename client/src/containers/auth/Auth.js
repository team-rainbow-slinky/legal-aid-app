import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { getSession } from '../../selectors/session';
import { AuthForm } from '../../components/auth/Auth';

export const Login = connect(
  state => ({
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(login({ email, password }))
  })
)(AuthForm);
