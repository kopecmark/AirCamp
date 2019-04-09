import React from 'react';

const SearchItems = () => {
    <div className="search-square">
      <div className="crop">
        <Link to={`/listings/`}>
          <img src="https://s3-us-west-1.amazonaws.com/aircamp-pro/patrick-hendry-424259-unsplash.jpg" />
        </Link>
      </div>
      <footer className="search-footer">
        <Link to={`/listings/`}>
          <h2>Yosemite</h2>
          <p>California</p>
        </Link>
      </footer>

      <div className="search-square">
        <div className="crop">
          <Link to={`/listings/`}>
            <img src="https://s3-us-west-1.amazonaws.com/aircamp-pro/dominik-jirovsky-749482-unsplash.jpg" />
          </Link>
        </div>
        <footer className="search-footer">
          <Link to={`/listings/`}>
            <h2>Yosemite</h2>
            <p>California</p>
          </Link>
        </footer>
      </div>
      <div className="search-square">
        <div className="crop">
          <Link to={`/listings/`}>
            <img src="https://s3-us-west-1.amazonaws.com/aircamp-pro/tyson-dudley-749130-unsplash.jpg" />
          </Link>
        </div>
        <footer className="search-footer">
          <Link to={`/listings/`}>
            <h2>Yosemite</h2>
            <p>California</p>
          </Link>
        </footer>
      </div>
    </div>

}


export default SearchItems;