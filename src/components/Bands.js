import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {

renderBands = () => {
    // debugger 

    return this.props.bands.map(band => 
    <Band key={band.id} band={band} delete={this.props.delete} 
    />)
}

    render() {
        return (
            <div>
                {/* render each Band component from a list of Bands */}
               {/* <Band  */}
                {/* // pass down props */}
                {/* // /> */}
                   {this.renderBands()}
            </div>
        )
    }
}
  




export default Bands