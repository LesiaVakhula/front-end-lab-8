import React, { Component } from 'react';

class ColorsComponent extends Component{
    constructor(props) {
        super(props)
    }
    render (){
        return(
                <div className="item-color" style={{backgroundColor:this.props.color}}>
                    <button className="btn-add" id={this.props.id} disabled={this.props.nonAvailable} onClick={this.props.handleAddColor}><i className="material-icons">add</i>Add</button>
                </div>

        )
    }
}
export default ColorsComponent;