const items = () => {
    <div className="search-square">
      <div className="crop">
        <Link to={`/listings/${listings[5].id}`}>
          <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522899727/yosemite_cropped.jpg" />
        </Link>
      </div>
      <footer className="search-footer">
        <Link to={`/listings/${listings[5].id}`}>
          <h2>Yosemite</h2>
          <p>California</p>
        </Link>
      </footer>
    </div>
}


export default Splash;