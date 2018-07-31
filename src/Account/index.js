import React, { Component } from 'react';


class Account extends Component {
  state = {
    balance: 0
  }
  handledDepositClick = (e) => {
    // It is good practice to still prevent default behavior
    e.preventDefault();// set a local variable to the amount entered in the text box.
    const amount = parseInt(this.inputBox.value, 10);// set a local variable to the new balance based off of the original balance + amount
    const newBalance = this.state.balance + amount;// set the balance to the newBalance using the setState method (necessary)
    console.log('clicked');
    console.log(newBalance);
    console.log(amount, 'this amount');
    this.setState({
      balance: newBalance
    })// empty out the text box in this component
    this.inputBox.value = '';
  }
  handledWithDrawClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value, 10);
    if (amount <= this.state.balance) {
      const newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    } else {
      alert("you don't have enough money");
    }
    this.inputBox.value = '';
  }
  render() {
// set the default class to `balance` for the balanceClass.
// if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      this.balanceClass = 'zero';
    } else {
      this.balanceClass = 'balance';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handledDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handledWithDrawClick} />
      </div>
    )
  }
}

export default Account;
