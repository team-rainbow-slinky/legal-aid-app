import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../selectors/session';
import { ROUTES } from '../../routes/routes';
import { logout } from '../../actions/session';

const Header = ({ user, handleLogout }) => {
  
  //write a function that runs the action we want
  return (
    <header>
      <nav>
        {user && <NavLink to={ROUTES.ORGHOME.linkTo()}>HOME</NavLink>}
        {user
          ? <NavLink to={ROUTES.LOGIN.linkTo()} onClick={handleLogout}>Logout</NavLink> //if there is a user
          : <h3>hi</h3>
        }
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  user: getSession(state)
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    console.log('LOGOUTTTT');
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
