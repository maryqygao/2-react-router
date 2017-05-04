import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export default class Archives extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        article: PropTypes.string
      }).isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { search } = this.props.location;
    const { date, filter } = queryString.parse(search);
    const { article } = this.props.match.params;
    return (
      <div>
        <h1>Archives: ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
