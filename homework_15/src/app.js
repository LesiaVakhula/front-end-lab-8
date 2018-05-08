import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import ColorsComponent from  './features/ColorsComponent';
import SelectedColorsComponent from './features/SelectedColorsComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.array = [];
        this.state = {
            colors: [],
            load: false,
            nonAvailable: false,
            search:'',
            element:'',
            selectedColors: []
        };
    }
    componentDidMount() {
        fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
            .then(res => res.json())
            .then(colors => {
                this.setState({
                    colors: colors,
                    load: true
                });
            })
    }

    showColors(colors){
        if(this.state.load){
            return (
                colors.map((item) =>(
                    <ColorsComponent key={item.id} id={item.id} tags={item.tags} color={item.color} nonAvailable={this.state.nonAvailable} handleAddColor={this.handleAddColor.bind(this)}/>))
            )
        } else {
            return(
                <div>Loading....</div>
            )
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)})
    }

    handleAddColor(event) {
        this.array.unshift( this.state.colors.find(item =>item.id == event.target.id));
        this.setState({colors: this.state.colors.filter(item => item.id != event.target.id),
                        selectedColors : this.array});
        this.state.nonAvailable = this.array.length>=10;
    }

    handleRemoveColor(event){
        console.log(this.array,this.state.colors,this.state.selectedColors);
        let elem = this.array.filter(item => item.id == event.target.id);
        this.array = this.array.filter(item => item.id != event.target.id);
        this.setState({selectedColors : this.array,
                        colors: this.state.colors.concat(elem).sort((a,b)=>a.id-b.id)});
    }

    showText(condition){
        if(condition === 0 && this.state.load){
            return(
                <p>There are no colors found</p>
            )
        }
    }
    showEmptyBlock(condition){
        if(condition.length === 0){
            return(
                <div className="empty-main"><div className="empty-light"> </div><div className="empty-lighter"> </div> <div className="empty-dark"> </div> </div>
            )
        }
    }

  render(){
      const selectedColors = this.state.selectedColors;
      let filteredColors = this.state.colors.filter(color => {
          return color.tags.some(item => item.indexOf(this.state.search) !== -1)}
      );
    return (
      <div className="main">
          <div className="search">
              <input className="search-input" type="text" value={this.state.search} placeholder="Color`s name, tags" onChange={this.updateSearch.bind(this)}/>
          </div>
          <div className="selected" >
              {this.showEmptyBlock(this.state.selectedColors)}
                {selectedColors.slice(0,5).map((item) =>(
                  <SelectedColorsComponent key={item.id} id={item.id} item={item} selectedColors={item.color}   handleRemoveColor={this.handleRemoveColor.bind(this)}/>))}
          </div>
          <div className="main-colors">
              <p className="amount">Colors: {filteredColors.length}</p>
              <div className="noFound"> {this.showText(filteredColors.length)} </div>
            {this.showColors(filteredColors)}
                </div>
      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);