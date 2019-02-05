import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../selectors/session';
import { ROUTES } from '../../routes/routes';
import { logout } from '../../actions/session';
import { getOrg } from '../../selectors/session';
import styles from '../../components/app/App.css';

const Header = ({ user, org, handleLogout }) => {
  // Don't show header if no user is logged in
  if (!user) return null;
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div>
          <h1 className={styles.headText}>Multnomah Legal Aid</h1>
          {org && <div className={styles.orgName}>{org.name}</div>}
        </div>
        {org && <img className={styles.logoImg} src={org.logoUrl} />}
      </div>
      <nav className={styles.nav}>
        {user && <NavLink to={ROUTES.ORGHOME.linkTo()}>Home</NavLink>}
        {user && <NavLink to={ROUTES.SEARCHMCSO.linkTo()}>Search MCSO</NavLink>}
        {user && <NavLink to={ROUTES.LOGIN.linkTo()} onClick={handleLogout}>Logout</NavLink>}
        {user && <NavLink to={ROUTES.ABOUT.linkTo()}>About Us</NavLink>}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  org: getOrg(state),
  user: getSession(state),
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
