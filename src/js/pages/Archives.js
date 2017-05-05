import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Article from '../components/Article';

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
    const articles = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Oooh Look an Article'
    ];

    const { search } = this.props.location;
    const { date, filter } = queryString.parse(search);
    const { article } = this.props.match.params;
    return (
      <div>
        <h1>Archives</h1>
        <h4>article: {article}, date: {date}, filter: {filter}</h4>
        <div className="row">
          {articles.map(title => <Article key={title} title={title} />)}
        </div>
      </div>
    );
  }
}
