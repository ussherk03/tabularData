import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './fonts/css/all.css';
import './App.css';
import Incomes from './branches/incomes';
import Edit from './branches/edit';
import Add from './branches/add';


class App extends Component {

  state = {
    // { id: 0, title: 'Fees', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'My Payment' },
    incomes:    [
      { id: 0, title: 'Fees', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'My Payment'},

      { id: 1, title: 'Meal Plan', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'Leave a Memo'}
    ],

  }



  delInc = (index) => {
    const { incomes } = this.state;
    
    incomes.splice(index, 1);

    if (incomes.length === 0) {

      document.querySelector('#display').style.display = 'block';
    }

    // Store incomes at localStorage
    localStorage.setItem('nIncomes', JSON.stringify(this.state.incomes));

    // Update localStorage, then { state: incomes }
    this.setState({ incomes: JSON.parse(localStorage.getItem('nIncomes')) });


  }

  componentDidMount() {
    this.setState({ incomes: JSON.parse(localStorage.getItem('nIncomes')) });
  }


  addInc = () => {
    let { incomes } = this.state;

    let nTitle, nCat, nUniform, nInvc, nDate, nNote;

    nTitle = document.querySelector('#new-title').value;
    nCat = document.querySelector('.new-cat').value;
    nUniform = document.querySelector('#new-uniform').value;
    nInvc = document.querySelector('#new-invc').value;
    nDate = document.querySelector('#new-date').value;
    nNote = document.querySelector('.new-notes').value;

    // Display prompt
    document.querySelector('#prompt').style.opacity = 1;

    setTimeout(() => {
      document.querySelector('#prompt').style.opacity = 0;
    }, 2500);


    incomes.push({
      id: (incomes.length + 1), title: nTitle,
      category: nCat, amount: 200, invNum: nInvc,
      date: nDate, note: nNote
    });

    // Store  incomes at localStorage
    localStorage.setItem('nIncomes', JSON.stringify(incomes));

    console.log(incomes);

    // Parse localStorage data to incomes
    this.setState({ incomes: JSON.parse(localStorage.getItem('nIncomes')) });

    // Empty fields after submission
    document.querySelector('#new-title').value = ' ';
    document.querySelector('#new-invc').value = ' ';
    document.querySelector('#new-date').value = ' ';
    document.querySelector('.new-notes').value = ' ';
    document.querySelector('#new-uniform').value = ' ';
  }

  

  editInc = (index, income) => {

    return null;
    
  }


  render() {

    return (
      <>
        <Router>
          <Route exact path="/incomes">
            <Incomes
              incomes={this.state.incomes}
              delInc={this.delInc}
              editInc={this.editInc}
            />
          </Route>

          <Route path="/add">
            <Add addInc={this.addInc} />
          </Route>

          <Route path="/edit">
            <Edit incomes={this.state.incomes} />
          </Route>

        </Router>
      </>
    )
  }
}

export default App;