import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { getSession, getSessionLoading, getOrg } from '../../selectors/session';
import { refreshSession, fetchOrg } from '../../actions/session';

export const withSession = Component => {

  class WithSessionComponent extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      session: PropTypes.object,
      refreshSession: PropTypes.func.isRequired,
      fetchOrg: PropTypes.func.isRequired
    };

    componentDidMount() {
      if(!this.props.session) {
        this.props.refreshSession();
      } else {
        this.props.fetchOrg();
      }
    }

    componentDidUpdate(prevProps) {
      if(this.props.session !== prevProps.session && !this.props.org) {
        this.props.fetchOrg();
      }
    }

    render() {
      if(this.props.loading) return <h1>Loading Session</h1>;
      if(!this.props.session) return <Redirect to={ROUTES.LOGIN.linkTo()} />;

      return <Component {...this.props} />;
    }
  }

  return connect(
    state => ({
      session: getSession(state),
      org: getOrg(state),
      loading: getSessionLoading(state)
    }),
    dispatch => ({
      refreshSession: () => {
        dispatch(refreshSession());
      },
      fetchOrg: () => dispatch(fetchOrg())
    })

  )(WithSessionComponent);
};
