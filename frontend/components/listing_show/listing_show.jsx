import React from 'React';

class ListingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id)
  }


  render () {
    if (this.props.listing.photoUrls === undefined) {
      return null
    }
    return (
      <div> 
        <div className='listing-images'>
          <img src={this.props.listing.photoUrls[0]} />
          <img src={this.props.listing.photoUrls[1]} />
          <img src={this.props.listing.photoUrls[2]} />
        </div>
        <div className='listing-information'>
          <h3>{this.props.listing.site_title} </h3>
          <p>{this.props.listing.description}</p>
          <div className="listing-spacer"></div>
          <h4>Details</h4>
          <div className="details-container">
            <ul className="details-items">
              <li><span>Check in:</span> {this.props.listing.check_in_time}</li>
              <li><span>On arrival:</span> Meet and greet </li>
              <li><span>Check out:</span> {this.props.listing.check_in_time}</li>
              <li><span>Minimum nights:</span> 1 night</li>
              <li><span>Group sizes:</span> {this.props.listing.capacity} people per site</li>
            </ul>
          </div>
          <div className='activities-container'>
            <h5>Activities</h5>
            <h6>Offered on the Host's property or nearby.</h6>
            <ul>
              <li><div></div>
                <p>Climbing</p></li>
              <li><div></div>
                <p>Biking</p></li>
              <li><div></div>
                <p>Horseback riding</p></li>
              <li><div></div>
                <p>Surfing</p></li>
              <li><div></div>
                <p>Hiking</p></li>
              <li><div></div>
                <p>Paddling</p></li>
              <li><div></div>
                <p>Wildlife watching</p></li>
              <li><div></div>
                <p>Skiing</p></li>
            </ul>
          </div>
          
        </div>
      </div>
    )
  }
}

export default ListingShow;