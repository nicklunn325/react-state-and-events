
import './App.css';
import React from 'react';
import Home from './Home.js'
import Button from './Button.js'
import PiggyBank from './PiggyBank'

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     currentPage: "home",
  //     students: ["Emmanuel", "Alberto", "Duke"],
  //     total: 0,
  //     quarters: 0,
  //     dimes: 0,
  //     nickels: 0,
  //     pennies: 0
  //   }

    // this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    currentPage: "home",
    students: ["Emmanuel", "Alberto", "Duke"],
    total: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}
    
handleDeposit = (amount) => {
    console.log(amount)
    switch(amount){
        case (.25):
            this.setState({
                ...this.state,
                total: this.state.total + amount,
                quarters: this.state.quarters + 1 
            })
            break;
        case (.10):
            this.setState({
                ...this.state,
                total: this.state.total + amount,
                dimes: this.state.dimes + 1 
            })
            break;
        case (.05):
            this.setState({
                ...this.state,
                total: this.state.total + amount,
                nickels: this.state.nickels + 1 
            })
            break;
        case (.01):
            this.setState({
                ...this.state,
                total: this.state.total + amount,
                pennies: this.state.pennies + 1 
            })
            break;
        default:
          console.log("hello world")
    }
  }


  renderComponent = () => {
    switch(this.state.currentPage){
      case 'home':
        return <Home/>
      case 'piggybank':
        return <PiggyBank handleDeposit={this.handleDeposit} amount={this.state.total} quarters={this.state.quarters} dimes={this.state.dimes} nickels={this.state.nickels} pennies={this.state.pennies}/>
      default:
        console.log("unknown page")
    }
  }

  handleClick = (page) => {
    // console.log(this)
    this.setState({
      ...this.state,
      currentPage: page
    })
    console.log(this.state)
  }

  render(){
      return (
        <>
        <Button title="home" handleClick={this.handleClick}/>
        <Button title="piggybank" handleClick={this.handleClick}/>
        {this.renderComponent()}
        </>
      );
  }
}

export default App;
