import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { fetchMode } from '../../actions/mode';
import { getSession, getSessionError } from '../../selectors/session';
import { getMode } from '../../selectors/mode';
import { AuthForm } from '../../components/auth/Auth';

export const Login = connect(
  state => ({
    session: getSession(state),
    error: getSessionError(state),
    mode: getMode(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(login({ email, password })),
    fetchMode: () => dispatch(fetchMode())
  })
)(AuthForm);
