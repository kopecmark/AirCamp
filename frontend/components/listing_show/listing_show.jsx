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
          <h3>Details</h3>
          <div className="details-container">
            <ul>
              <li>Check in: {this.props.listing.check_in_time}</li>
              <li>On arrival: Meet and greet </li>
              <li>Check out: {this.props.listing.check_in_time}</li>
              <li>Minimum nights: 1 night</li>
              <li>Group sizes: {this.props.listing.capacity} people per site</li>
            </ul>
          </div>
          <div className='activities-container'>
            <h3>Activities</h3>
            <h4>Offered on the Host's property or nearby.</h4>
            <ul>
              <li><div>🧗</div>
                Climbing</li>
              <li><div>🚵‍♂️</div>
                Biking</li>
              <li><div>🏇</div>
                Horseback riding</li>
              <li><div>🏄‍♂️</div>
                Surfing</li>
              <li><div>🥾</div>
                Hiking</li>
              <li><div>🚣</div>
                Paddling</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow;