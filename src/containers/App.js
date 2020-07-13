import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField} from '../actions';

const mapStateToProps =(state) => {
   return {
      searchField: state.searchField
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
   onSearchChange: (event) => dispatch (setSearchField(event.target.value))
   }
}



class App extends Component{
constructor() {
	super()
	this.state = {
	robots: [],

}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({robots:users})});
	  

}

  render() {
     const {robots} = this.state;
     const {searchField, onSearchChange} = this.props;
   const filteredRobots = this.state.robots.filter(robots => {
   return robots.name.toLowerCase().includes(searchField.toLowerCase());
   	})
  return (
  	<div className = 'tc' >
     <h1 className = 'f1'>LONDONERS</h1>
     <p className = "homepage">Find your perfect match</p>
	<SearchBox  searchChange={onSearchChange}/>
     <Scroll>
        <CardList robots = {filteredRobots} />
     </Scroll>
    </div>

  	 );
     }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);