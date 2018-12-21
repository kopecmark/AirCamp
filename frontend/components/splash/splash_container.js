import { connect } from 'react-redux';
import Splash from './splash';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));
