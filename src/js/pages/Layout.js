import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Archives from './Archives';
import Featured from './Featured';
import Settings from './Settings';

class Layout extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired
  };

  navigate = () => {
    this.props.history.replace('/');
  };

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        <Route exact path="/" component={Featured} />
        <Route path="/archives" component={Archives} />
        <Route path="/settings" component={Settings} />
        <Link to="/">
          <button className="btn btn-success">featured</button>
        </Link>
        <Link to="/archives" class="btn btn-danger">archives</Link>
        <Link to="/settings" replace>settings</Link>
        <button onClick={this.navigate}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);
