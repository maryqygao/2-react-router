import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Route } from 'react-router-dom';
import { withRouter, matchPath } from 'react-router';

import Archives from './Archives';
import Featured from './Featured';
import Navigation from '../components/layout/Navigation';
import Settings from './Settings';
import Footer from '../components/layout/Footer';

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired
  };

  navigate = () => {
    this.props.history.replace('/');
  };

  render() {
    const { pathname } = this.props.location;
    const archivesMatch = matchPath(pathname, {
      path: '/archives/:article?'
    });
    console.log(archivesMatch !== null ? archivesMatch.isExact : false);

    const links = [
      { text: 'Home', to: '/' },
      { text: 'Featured', to: '/featured' },
      { text: 'Archives', to: '/archives' },
      { text: 'Settings', to: '/settings' }
    ];

    const activeLinks = links.map(item => ({
      ...item,
      active: (matchPath(pathname, { path: item.to }) || {}).isExact || false
    }));

    return (
      <div className="layout">
        <Navigation links={activeLinks} />
        <div className="container content">
          <div className="row my-4">
            <div className="col-lg-12">
              <h1>KillerNews.net</h1>
              <Link to="/">
                <button className="btn btn-info">featured</button>
              </Link>
              <NavLink
                to="/archives"
                className="btn btn-secondary"
                activeClassName="btn-success"
              >
                archives
              </NavLink>
              <Link to="/settings" replace>settings</Link>
              <button onClick={this.navigate}>featured</button>
            </div>
          </div>
          <Route exact path="/" component={Featured} />
          <Route path="/archives/:article?" component={Archives} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
