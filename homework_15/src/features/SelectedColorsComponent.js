import React, { Component } from 'react';

class SelectedColorsComponent extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return(
            <div className="container-color" >
                <div className="select-color" style={{backgroundColor:this.props.selectedColors}}>
                </div>
                <button className='btn-close' ><i id={this.props.id} onClick={this.props.handleRemoveColor} className="material-icons">close</i></button>
            </div>
        )
    }
}
export default SelectedColorsComponent;