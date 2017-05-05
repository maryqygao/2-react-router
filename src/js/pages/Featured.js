import React from 'react';
import Article from '../components/Article';

export default class Featured extends React.Component {
  render() {
    const articles = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Oooh Look an Article'
    ];

    const adText = [
      `This call to action card is a great place to showcase some \
important information or display a clever tagline!`,
      'Ad spot #2',
      'Ad spot #3',
      'Ad spot #4',
      'Ad spot #5'
    ];

    const randomAd = adText[Math.floor(Math.random() * adText.length)];

    return (
      <div>
        <div className="row my-4">
          <div className="col-lg-8">
            <img
              className="img-fluid rounded"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h1>Business Name or Tagline</h1>
            <p>
              This is a template that is great for small businesses. It doesn't have too
              much fancy flare to it, but it makes a great use of the standard Bootstrap
              core components. Feel free to use this template for any project you want!
            </p>
            <a className="btn btn-primary btn-lg" href="#">Call to Action!</a>
          </div>
        </div>

        <div className="card card-inverse card-primary my-4 text-center">
          <div className="card-block">
            <p className="text-white m-0">
              {randomAd}
            </p>
          </div>
        </div>

        <div className="row">
          {articles.map(title => <Article key={title} title={title} />)}
        </div>
      </div>
    );
  }
}
