import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <div className="card-block">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas
          ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">More Info</a>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired
};

export default Article;
