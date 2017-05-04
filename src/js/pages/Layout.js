import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Route } from 'react-router-dom';
import { withRouter, matchPath } from 'react-router';

import Archives from './Archives';
import Featured from './Featured';
import Settings from './Settings';

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
    const archivesMatch = matchPath(this.props.location.pathname, {
      path: '/archives/:article?'
    });
    console.log(archivesMatch !== null ? archivesMatch.isExact : false);
    return (
      <div>
        <h1>KillerNews.net</h1>
        <Route exact path="/" component={Featured} />
        <Route path="/archives/:article?" component={Archives} />
        <Route path="/settings" component={Settings} />
        <Link to="/">
          <button className="btn btn-info">featured</button>
        </Link>
        <NavLink
          to="/archives"
          class="btn btn-secondary"
          activeClassName="btn-success"
        >
          archives
        </NavLink>
        <Link to="/settings" replace>settings</Link>
        <button onClick={this.navigate}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);
