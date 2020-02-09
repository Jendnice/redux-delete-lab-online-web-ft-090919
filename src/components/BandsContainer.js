import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands 
        bands={this.props.bands}
        delete={this.props.delete}
        // pass down props 
        />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  // add Delete method here
  delete: bandId => dispatch({type: 'DELETE_BAND', id: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
