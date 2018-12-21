import React from 'react';

class ListingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id)
  }


  render () {
    let host;
    let listing;

    if (!this.props.listing) {
      host =  null;
    } else {
        host = this.props.listing.host;
        listing = this.props.listing;
    }

    if (this.props.listing.photoUrls === undefined) {
      return null
    }
    return (
      <div> 
        <div className='listing-images'>
          <img src={listing.photoUrls[0]} />
          <img src={listing.photoUrls[1]} />
          <img src={listing.photoUrls[2]} />
        </div>
        <div className='listing-information'>
          <h3>{listing.site_title} </h3>
          <div className='hosted-by'><span>Hosted by</span> {host}</div>
          <p>{listing.description}</p>
          <div className="listing-spacer"></div>
          <h4>Details</h4>
          <div className="details-container">
            <ul className="details-items">
              <li><span>Check in:</span> {listing.check_in_time}</li>
              <li><span>On arrival:</span> Meet and greet </li>
              <li><span>Check out:</span> {listing.check_in_time}</li>
              <li><span>Minimum nights:</span> 1 night</li>
              <li><span>Group sizes:</span> {listing.capacity} people per site</li>
            </ul>
          </div>
          <div className='activities-container'>
            <h5>Activities</h5>
            <h6>Offered on the Host's property or nearby.</h6>
            <ul>
              <li><div>🧗</div>
                <p>Climbing</p></li>
              <li><div>🚵‍♂️</div>
                <p>Biking</p></li>
              <li><div>🏇</div>
                <p>Horseback riding</p></li>
              <li><div>🏄‍♂️</div>
                <p>Surfing</p></li>
              <li><div>🥾</div>
                <p>Hiking</p></li>
              <li><div>🚣</div>
                <p>Paddling</p></li>
              <li><div>🦜</div>
                <p>Wildlife watching</p></li>
              <li><div>⛷️</div>
                <p>Skiing</p></li>
            </ul>
          </div>
          
        </div>
        </div>
    )
  }
}

export default ListingShow;