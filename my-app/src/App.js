import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import React from 'react';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = { 
      clicks: 0,
    };
    
    this.plusOne = this.plusOne.bind(this);
  }
  
  plusOne() {
    let currentClicks = this.state.clicks;
    this.setState({clicks: currentClicks +1 });
  }
    
  render(){  
    return [
      <Header clicks = {this.state.clicks} clickbtn={ () => this.plusOne()} title = "Шапка 1"/>,
      <Header clicks = {this.state.clicks} clickbtn={ () => this.plusOne()} title="Шапка 2"/>,
      <Header clicks = {this.state.clicks} clickbtn={ () => this.plusOne()} title="Шапка 3"/>,
      <Header clicks = {this.state.clicks} clickbtn={ () => this.plusOne()} title="Шапка 4"/>,
      <Header clicks = {this.state.clicks} clickbtn={ () => this.plusOne()} title="Шапка 5"/>   
    ];
  }
}
export default App;
