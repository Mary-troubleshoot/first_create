import React from 'react';
import HomePage from '../Component/HomePage/HomePage';
import CardList from '../Component/CardList/CardList';
import SearchBox from '../Component/SearchBox/SearchBox';
import { robots } from '../robots'
import './App.css';

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      searchField: "",
      robots: robots,
      isSignedIn: true,
      pages: ""

    }
  }
 
 onInputChange = (event) => {
   this.setState({searchField: event.target.value})
    
 }

 isSignedIn = (event) => {
   this.setState({ isSignedIn: false })
 }
  render() {
      const filteredRobots = this.state.robots.filter((item) =>{
        return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      });

      // if( !filteredRobots.length ) {
      //   return(
      //     <h1>No REsult Found!!!</h1>
      //   )
      // }
    return (

        <div className="App"> 
        <h1 className='f1'>ROBOFRIENDS</h1>


        {
          this.state.isSignedIn ?
          <HomePage isSignedIn={ this.isSignedIn } /> : null
         }
        <SearchBox  onInputChange ={this.onInputChange} />

         {
           !filteredRobots.length ?
           <h1> No Result Found </h1> : null
         }
       
        <CardList robots={ filteredRobots} />

       </div>
    )

  };
}

export default App;
