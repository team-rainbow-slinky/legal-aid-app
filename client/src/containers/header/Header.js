import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../selectors/session';
import { ROUTES } from '../../routes/routes';
import { logout } from '../../actions/session';
import styles from './Header.css';

const Header = ({ user, handleLogout }) => {
  
  //write a function that runs the action we want
  return (
    <header>
      <nav className={styles.nav}>
        {user && <NavLink to={ROUTES.ORGHOME.linkTo()}>Home</NavLink>}
        {user && <NavLink to={ROUTES.SEARCHMCSO.linkTo()}>Search MCSO</NavLink>}
        {user && <NavLink to={ROUTES.LOGIN.linkTo()} onClick={handleLogout}>Logout</NavLink>}
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
